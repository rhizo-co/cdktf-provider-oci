# `dataOciOspGatewayAddressRule` Submodule <a name="`dataOciOspGatewayAddressRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayAddressRule <a name="DataOciOspGatewayAddressRule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule oci_osp_gateway_address_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule(
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
  country_code: str,
  osp_home_region: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#compartment_id DataOciOspGatewayAddressRule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#country_code DataOciOspGatewayAddressRule#country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#osp_home_region DataOciOspGatewayAddressRule#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#id DataOciOspGatewayAddressRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#compartment_id DataOciOspGatewayAddressRule#compartment_id}.

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#country_code DataOciOspGatewayAddressRule#country_code}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#osp_home_region DataOciOspGatewayAddressRule#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#id DataOciOspGatewayAddressRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOspGatewayAddressRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOspGatewayAddressRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOspGatewayAddressRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOspGatewayAddressRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayAddressRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.address">address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList">DataOciOspGatewayAddressRuleAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.contact">contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList">DataOciOspGatewayAddressRuleContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.tax">tax</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList">DataOciOspGatewayAddressRuleTaxList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.address"></a>

```python
address: DataOciOspGatewayAddressRuleAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList">DataOciOspGatewayAddressRuleAddressList</a>

---

##### `contact`<sup>Required</sup> <a name="contact" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.contact"></a>

```python
contact: DataOciOspGatewayAddressRuleContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList">DataOciOspGatewayAddressRuleContactList</a>

---

##### `tax`<sup>Required</sup> <a name="tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.tax"></a>

```python
tax: DataOciOspGatewayAddressRuleTaxList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList">DataOciOspGatewayAddressRuleTaxList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayAddressRuleAddress <a name="DataOciOspGatewayAddressRuleAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddress()
```


### DataOciOspGatewayAddressRuleAddressFields <a name="DataOciOspGatewayAddressRuleAddressFields" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFields"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFields.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFields()
```


### DataOciOspGatewayAddressRuleAddressFieldsFormat <a name="DataOciOspGatewayAddressRuleAddressFieldsFormat" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormat()
```


### DataOciOspGatewayAddressRuleAddressFieldsLabel <a name="DataOciOspGatewayAddressRuleAddressFieldsLabel" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabel()
```


### DataOciOspGatewayAddressRuleConfig <a name="DataOciOspGatewayAddressRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  country_code: str,
  osp_home_region: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#compartment_id DataOciOspGatewayAddressRule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#country_code DataOciOspGatewayAddressRule#country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#osp_home_region DataOciOspGatewayAddressRule#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#id DataOciOspGatewayAddressRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#compartment_id DataOciOspGatewayAddressRule#compartment_id}.

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#country_code DataOciOspGatewayAddressRule#country_code}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#osp_home_region DataOciOspGatewayAddressRule#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_address_rule#id DataOciOspGatewayAddressRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayAddressRuleContact <a name="DataOciOspGatewayAddressRuleContact" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContact()
```


### DataOciOspGatewayAddressRuleContactFields <a name="DataOciOspGatewayAddressRuleContactFields" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFields"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFields.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFields()
```


### DataOciOspGatewayAddressRuleContactFieldsFormat <a name="DataOciOspGatewayAddressRuleContactFieldsFormat" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormat()
```


### DataOciOspGatewayAddressRuleContactFieldsLabel <a name="DataOciOspGatewayAddressRuleContactFieldsLabel" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabel()
```


### DataOciOspGatewayAddressRuleTax <a name="DataOciOspGatewayAddressRuleTax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTax"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTax.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTax()
```


### DataOciOspGatewayAddressRuleTaxFields <a name="DataOciOspGatewayAddressRuleTaxFields" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFields"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFields.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFields()
```


### DataOciOspGatewayAddressRuleTaxFieldsFormat <a name="DataOciOspGatewayAddressRuleTaxFieldsFormat" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormat.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormat()
```


### DataOciOspGatewayAddressRuleTaxFieldsLabel <a name="DataOciOspGatewayAddressRuleTaxFieldsLabel" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabel()
```


### DataOciOspGatewayAddressRuleTaxValueSet <a name="DataOciOspGatewayAddressRuleTaxValueSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSet.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSet()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayAddressRuleAddressFieldsFormatList <a name="DataOciOspGatewayAddressRuleAddressFieldsFormatList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference <a name="DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.example">example</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormat">DataOciOspGatewayAddressRuleAddressFieldsFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.example"></a>

```python
example: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleAddressFieldsFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormat">DataOciOspGatewayAddressRuleAddressFieldsFormat</a>

---


### DataOciOspGatewayAddressRuleAddressFieldsLabelList <a name="DataOciOspGatewayAddressRuleAddressFieldsLabelList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference <a name="DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.example">example</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabel">DataOciOspGatewayAddressRuleAddressFieldsLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.example"></a>

```python
example: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleAddressFieldsLabel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabel">DataOciOspGatewayAddressRuleAddressFieldsLabel</a>

---


### DataOciOspGatewayAddressRuleAddressFieldsList <a name="DataOciOspGatewayAddressRuleAddressFieldsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleAddressFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleAddressFieldsOutputReference <a name="DataOciOspGatewayAddressRuleAddressFieldsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.format">format</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList">DataOciOspGatewayAddressRuleAddressFieldsFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.isRequired">is_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList">DataOciOspGatewayAddressRuleAddressFieldsLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFields">DataOciOspGatewayAddressRuleAddressFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.format"></a>

```python
format: DataOciOspGatewayAddressRuleAddressFieldsFormatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsFormatList">DataOciOspGatewayAddressRuleAddressFieldsFormatList</a>

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.isRequired"></a>

```python
is_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.label"></a>

```python
label: DataOciOspGatewayAddressRuleAddressFieldsLabelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsLabelList">DataOciOspGatewayAddressRuleAddressFieldsLabelList</a>

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleAddressFields
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFields">DataOciOspGatewayAddressRuleAddressFields</a>

---


### DataOciOspGatewayAddressRuleAddressList <a name="DataOciOspGatewayAddressRuleAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleAddressOutputReference <a name="DataOciOspGatewayAddressRuleAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.fields">fields</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList">DataOciOspGatewayAddressRuleAddressFieldsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.thirdPartyValidation">third_party_validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddress">DataOciOspGatewayAddressRuleAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.fields"></a>

```python
fields: DataOciOspGatewayAddressRuleAddressFieldsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressFieldsList">DataOciOspGatewayAddressRuleAddressFieldsList</a>

---

##### `third_party_validation`<sup>Required</sup> <a name="third_party_validation" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.thirdPartyValidation"></a>

```python
third_party_validation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleAddress">DataOciOspGatewayAddressRuleAddress</a>

---


### DataOciOspGatewayAddressRuleContactFieldsFormatList <a name="DataOciOspGatewayAddressRuleContactFieldsFormatList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference <a name="DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.example">example</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormat">DataOciOspGatewayAddressRuleContactFieldsFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.example"></a>

```python
example: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleContactFieldsFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormat">DataOciOspGatewayAddressRuleContactFieldsFormat</a>

---


### DataOciOspGatewayAddressRuleContactFieldsLabelList <a name="DataOciOspGatewayAddressRuleContactFieldsLabelList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference <a name="DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.example">example</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabel">DataOciOspGatewayAddressRuleContactFieldsLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.example"></a>

```python
example: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleContactFieldsLabel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabel">DataOciOspGatewayAddressRuleContactFieldsLabel</a>

---


### DataOciOspGatewayAddressRuleContactFieldsList <a name="DataOciOspGatewayAddressRuleContactFieldsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleContactFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleContactFieldsOutputReference <a name="DataOciOspGatewayAddressRuleContactFieldsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.format">format</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList">DataOciOspGatewayAddressRuleContactFieldsFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.isRequired">is_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList">DataOciOspGatewayAddressRuleContactFieldsLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFields">DataOciOspGatewayAddressRuleContactFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.format"></a>

```python
format: DataOciOspGatewayAddressRuleContactFieldsFormatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsFormatList">DataOciOspGatewayAddressRuleContactFieldsFormatList</a>

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.isRequired"></a>

```python
is_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.label"></a>

```python
label: DataOciOspGatewayAddressRuleContactFieldsLabelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsLabelList">DataOciOspGatewayAddressRuleContactFieldsLabelList</a>

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleContactFields
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFields">DataOciOspGatewayAddressRuleContactFields</a>

---


### DataOciOspGatewayAddressRuleContactList <a name="DataOciOspGatewayAddressRuleContactList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleContactOutputReference <a name="DataOciOspGatewayAddressRuleContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.fields">fields</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList">DataOciOspGatewayAddressRuleContactFieldsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContact">DataOciOspGatewayAddressRuleContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.fields"></a>

```python
fields: DataOciOspGatewayAddressRuleContactFieldsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactFieldsList">DataOciOspGatewayAddressRuleContactFieldsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleContact">DataOciOspGatewayAddressRuleContact</a>

---


### DataOciOspGatewayAddressRuleTaxFieldsFormatList <a name="DataOciOspGatewayAddressRuleTaxFieldsFormatList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference <a name="DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.example">example</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormat">DataOciOspGatewayAddressRuleTaxFieldsFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.example"></a>

```python
example: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleTaxFieldsFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormat">DataOciOspGatewayAddressRuleTaxFieldsFormat</a>

---


### DataOciOspGatewayAddressRuleTaxFieldsLabelList <a name="DataOciOspGatewayAddressRuleTaxFieldsLabelList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference <a name="DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.example">example</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabel">DataOciOspGatewayAddressRuleTaxFieldsLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.example"></a>

```python
example: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleTaxFieldsLabel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabel">DataOciOspGatewayAddressRuleTaxFieldsLabel</a>

---


### DataOciOspGatewayAddressRuleTaxFieldsList <a name="DataOciOspGatewayAddressRuleTaxFieldsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleTaxFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleTaxFieldsOutputReference <a name="DataOciOspGatewayAddressRuleTaxFieldsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.format">format</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList">DataOciOspGatewayAddressRuleTaxFieldsFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.isRequired">is_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.label">label</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList">DataOciOspGatewayAddressRuleTaxFieldsLabelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFields">DataOciOspGatewayAddressRuleTaxFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.format"></a>

```python
format: DataOciOspGatewayAddressRuleTaxFieldsFormatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsFormatList">DataOciOspGatewayAddressRuleTaxFieldsFormatList</a>

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.isRequired"></a>

```python
is_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.label"></a>

```python
label: DataOciOspGatewayAddressRuleTaxFieldsLabelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsLabelList">DataOciOspGatewayAddressRuleTaxFieldsLabelList</a>

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleTaxFields
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFields">DataOciOspGatewayAddressRuleTaxFields</a>

---


### DataOciOspGatewayAddressRuleTaxList <a name="DataOciOspGatewayAddressRuleTaxList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleTaxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleTaxOutputReference <a name="DataOciOspGatewayAddressRuleTaxOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.fields">fields</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList">DataOciOspGatewayAddressRuleTaxFieldsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.valueSet">value_set</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList">DataOciOspGatewayAddressRuleTaxValueSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTax">DataOciOspGatewayAddressRuleTax</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.fields"></a>

```python
fields: DataOciOspGatewayAddressRuleTaxFieldsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxFieldsList">DataOciOspGatewayAddressRuleTaxFieldsList</a>

---

##### `value_set`<sup>Required</sup> <a name="value_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.valueSet"></a>

```python
value_set: DataOciOspGatewayAddressRuleTaxValueSetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList">DataOciOspGatewayAddressRuleTaxValueSetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleTax
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTax">DataOciOspGatewayAddressRuleTax</a>

---


### DataOciOspGatewayAddressRuleTaxValueSetList <a name="DataOciOspGatewayAddressRuleTaxValueSetList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayAddressRuleTaxValueSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayAddressRuleTaxValueSetOutputReference <a name="DataOciOspGatewayAddressRuleTaxValueSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_address_rule

dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSet">DataOciOspGatewayAddressRuleTaxValueSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSetOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayAddressRuleTaxValueSet
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayAddressRule.DataOciOspGatewayAddressRuleTaxValueSet">DataOciOspGatewayAddressRuleTaxValueSet</a>

---



