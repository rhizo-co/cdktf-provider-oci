# `dataOciApigatewayGateways` Submodule <a name="`dataOciApigatewayGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayGateways <a name="DataOciApigatewayGateways" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways oci_apigateway_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGateways(
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
  certificate_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApigatewayGatewaysFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#compartment_id DataOciApigatewayGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#certificate_id DataOciApigatewayGateways#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#display_name DataOciApigatewayGateways#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#id DataOciApigatewayGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#state DataOciApigatewayGateways#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#compartment_id DataOciApigatewayGateways#compartment_id}.

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#certificate_id DataOciApigatewayGateways#certificate_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#display_name DataOciApigatewayGateways#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#filter DataOciApigatewayGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#id DataOciApigatewayGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#state DataOciApigatewayGateways#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApigatewayGatewaysFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]

---

##### `reset_certificate_id` <a name="reset_certificate_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApigatewayGateways resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGateways.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGateways.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGateways.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGateways.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApigatewayGateways resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApigatewayGateways to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApigatewayGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList">DataOciApigatewayGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.gatewayCollection">gateway_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList">DataOciApigatewayGatewaysGatewayCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filter"></a>

```python
filter: DataOciApigatewayGatewaysFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList">DataOciApigatewayGatewaysFilterList</a>

---

##### `gateway_collection`<sup>Required</sup> <a name="gateway_collection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.gatewayCollection"></a>

```python
gateway_collection: DataOciApigatewayGatewaysGatewayCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList">DataOciApigatewayGatewaysGatewayCollectionList</a>

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApigatewayGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGateways.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayGatewaysConfig <a name="DataOciApigatewayGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  certificate_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApigatewayGatewaysFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#compartment_id DataOciApigatewayGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#certificate_id DataOciApigatewayGateways#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#display_name DataOciApigatewayGateways#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#id DataOciApigatewayGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#state DataOciApigatewayGateways#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#compartment_id DataOciApigatewayGateways#compartment_id}.

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#certificate_id DataOciApigatewayGateways#certificate_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#display_name DataOciApigatewayGateways#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApigatewayGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#filter DataOciApigatewayGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#id DataOciApigatewayGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#state DataOciApigatewayGateways#state}.

---

### DataOciApigatewayGatewaysFilter <a name="DataOciApigatewayGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#name DataOciApigatewayGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#values DataOciApigatewayGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#regex DataOciApigatewayGateways#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#name DataOciApigatewayGateways#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#values DataOciApigatewayGateways#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_gateways#regex DataOciApigatewayGateways#regex}.

---

### DataOciApigatewayGatewaysGatewayCollection <a name="DataOciApigatewayGatewaysGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection()
```


### DataOciApigatewayGatewaysGatewayCollectionCaBundles <a name="DataOciApigatewayGatewaysGatewayCollectionCaBundles" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles()
```


### DataOciApigatewayGatewaysGatewayCollectionIpAddresses <a name="DataOciApigatewayGatewaysGatewayCollectionIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses()
```


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails()
```


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayGatewaysFilterList <a name="DataOciApigatewayGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayGatewaysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApigatewayGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]]

---


### DataOciApigatewayGatewaysFilterOutputReference <a name="DataOciApigatewayGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApigatewayGatewaysFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysFilter">DataOciApigatewayGatewaysFilter</a>]

---


### DataOciApigatewayGatewaysGatewayCollectionCaBundlesList <a name="DataOciApigatewayGatewaysGatewayCollectionCaBundlesList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.certificateAuthorityId">certificate_authority_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles">DataOciApigatewayGatewaysGatewayCollectionCaBundles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_bundle_id`<sup>Required</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

---

##### `certificate_authority_id`<sup>Required</sup> <a name="certificate_authority_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.certificateAuthorityId"></a>

```python
certificate_authority_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayGatewaysGatewayCollectionCaBundles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundles">DataOciApigatewayGatewaysGatewayCollectionCaBundles</a>

---


### DataOciApigatewayGatewaysGatewayCollectionIpAddressesList <a name="DataOciApigatewayGatewaysGatewayCollectionIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses">DataOciApigatewayGatewaysGatewayCollectionIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayGatewaysGatewayCollectionIpAddresses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddresses">DataOciApigatewayGatewaysGatewayCollectionIpAddresses</a>

---


### DataOciApigatewayGatewaysGatewayCollectionList <a name="DataOciApigatewayGatewaysGatewayCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayGatewaysGatewayCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayGatewaysGatewayCollectionOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.caBundles">ca_bundles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList">DataOciApigatewayGatewaysGatewayCollectionCaBundlesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.ipAddresses">ip_addresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList">DataOciApigatewayGatewaysGatewayCollectionIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.responseCacheDetails">response_cache_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection">DataOciApigatewayGatewaysGatewayCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_bundles`<sup>Required</sup> <a name="ca_bundles" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.caBundles"></a>

```python
ca_bundles: DataOciApigatewayGatewaysGatewayCollectionCaBundlesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionCaBundlesList">DataOciApigatewayGatewaysGatewayCollectionCaBundlesList</a>

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.ipAddresses"></a>

```python
ip_addresses: DataOciApigatewayGatewaysGatewayCollectionIpAddressesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionIpAddressesList">DataOciApigatewayGatewaysGatewayCollectionIpAddressesList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `network_security_group_ids`<sup>Required</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_cache_details`<sup>Required</sup> <a name="response_cache_details" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.responseCacheDetails"></a>

```python
response_cache_details: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayGatewaysGatewayCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollection">DataOciApigatewayGatewaysGatewayCollection</a>

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretId">authentication_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber">authentication_secret_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.connectTimeoutInMs">connect_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslEnabled">is_ssl_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslVerifyDisabled">is_ssl_verify_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.readTimeoutInMs">read_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.sendTimeoutInMs">send_timeout_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.servers">servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_secret_id`<sup>Required</sup> <a name="authentication_secret_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretId"></a>

```python
authentication_secret_id: str
```

- *Type:* str

---

##### `authentication_secret_version_number`<sup>Required</sup> <a name="authentication_secret_version_number" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.authenticationSecretVersionNumber"></a>

```python
authentication_secret_version_number: str
```

- *Type:* str

---

##### `connect_timeout_in_ms`<sup>Required</sup> <a name="connect_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.connectTimeoutInMs"></a>

```python
connect_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_ssl_enabled`<sup>Required</sup> <a name="is_ssl_enabled" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslEnabled"></a>

```python
is_ssl_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ssl_verify_disabled`<sup>Required</sup> <a name="is_ssl_verify_disabled" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.isSslVerifyDisabled"></a>

```python
is_ssl_verify_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `read_timeout_in_ms`<sup>Required</sup> <a name="read_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.readTimeoutInMs"></a>

```python
read_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `send_timeout_in_ms`<sup>Required</sup> <a name="send_timeout_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.sendTimeoutInMs"></a>

```python
send_timeout_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.servers"></a>

```python
servers: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetails</a>

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference <a name="DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_gateways

dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayGateways.DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers">DataOciApigatewayGatewaysGatewayCollectionResponseCacheDetailsServers</a>

---



