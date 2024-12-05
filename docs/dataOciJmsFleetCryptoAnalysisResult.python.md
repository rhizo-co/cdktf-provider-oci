# `dataOciJmsFleetCryptoAnalysisResult` Submodule <a name="`dataOciJmsFleetCryptoAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetCryptoAnalysisResult <a name="DataOciJmsFleetCryptoAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result oci_jms_fleet_crypto_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_result

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_analysis_result_id: str,
  fleet_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.cryptoAnalysisResultId">crypto_analysis_result_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_analysis_result_id`<sup>Required</sup> <a name="crypto_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.cryptoAnalysisResultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}.

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_result

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_result

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_result

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_result

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResult to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetCryptoAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.aggregationMode">aggregation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoRoadmapVersion">crypto_roadmap_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.findingCount">finding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.nonCompliantFindingCount">non_compliant_finding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.summarizedEventCount">summarized_event_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFirstEvent">time_first_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeLastEvent">time_last_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.totalEventCount">total_event_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultIdInput">crypto_analysis_result_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultId">crypto_analysis_result_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `aggregation_mode`<sup>Required</sup> <a name="aggregation_mode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.aggregationMode"></a>

```python
aggregation_mode: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `crypto_roadmap_version`<sup>Required</sup> <a name="crypto_roadmap_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoRoadmapVersion"></a>

```python
crypto_roadmap_version: str
```

- *Type:* str

---

##### `finding_count`<sup>Required</sup> <a name="finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.findingCount"></a>

```python
finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `non_compliant_finding_count`<sup>Required</sup> <a name="non_compliant_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.nonCompliantFindingCount"></a>

```python
non_compliant_finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `summarized_event_count`<sup>Required</sup> <a name="summarized_event_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.summarizedEventCount"></a>

```python
summarized_event_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_first_event`<sup>Required</sup> <a name="time_first_event" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFirstEvent"></a>

```python
time_first_event: str
```

- *Type:* str

---

##### `time_last_event`<sup>Required</sup> <a name="time_last_event" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeLastEvent"></a>

```python
time_last_event: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `total_event_count`<sup>Required</sup> <a name="total_event_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.totalEventCount"></a>

```python
total_event_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `crypto_analysis_result_id_input`<sup>Optional</sup> <a name="crypto_analysis_result_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultIdInput"></a>

```python
crypto_analysis_result_id_input: str
```

- *Type:* str

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `crypto_analysis_result_id`<sup>Required</sup> <a name="crypto_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultId"></a>

```python
crypto_analysis_result_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetCryptoAnalysisResultConfig <a name="DataOciJmsFleetCryptoAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_result

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_analysis_result_id: str,
  fleet_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.cryptoAnalysisResultId">crypto_analysis_result_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_analysis_result_id`<sup>Required</sup> <a name="crypto_analysis_result_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.cryptoAnalysisResultId"></a>

```python
crypto_analysis_result_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}.

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



