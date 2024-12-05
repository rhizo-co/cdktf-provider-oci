# `dataOciSecretsSecretbundle` Submodule <a name="`dataOciSecretsSecretbundle` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecretsSecretbundle <a name="DataOciSecretsSecretbundle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle oci_secrets_secretbundle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundle(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_id: str,
  id: str = None,
  secret_version_name: str = None,
  stage: str = None,
  version_number: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretVersionName">secret_version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.versionNumber">version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret_version_name`<sup>Optional</sup> <a name="secret_version_name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretVersionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.stage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}.

---

##### `version_number`<sup>Optional</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.versionNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetSecretVersionName">reset_secret_version_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetVersionNumber">reset_version_number</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_secret_version_name` <a name="reset_secret_version_name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetSecretVersionName"></a>

```python
def reset_secret_version_name() -> None
```

##### `reset_stage` <a name="reset_stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_version_number` <a name="reset_version_number" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetVersionNumber"></a>

```python
def reset_version_number() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciSecretsSecretbundle resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciSecretsSecretbundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciSecretsSecretbundle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciSecretsSecretbundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecretsSecretbundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretBundleContent">secret_bundle_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList">DataOciSecretsSecretbundleSecretBundleContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stages">stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfExpiry">time_of_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionNameInput">secret_version_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumberInput">version_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionName">secret_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `secret_bundle_content`<sup>Required</sup> <a name="secret_bundle_content" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretBundleContent"></a>

```python
secret_bundle_content: DataOciSecretsSecretbundleSecretBundleContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList">DataOciSecretsSecretbundleSecretBundleContentList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stages"></a>

```python
stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `time_of_expiry`<sup>Required</sup> <a name="time_of_expiry" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfExpiry"></a>

```python
time_of_expiry: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_version_name_input`<sup>Optional</sup> <a name="secret_version_name_input" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionNameInput"></a>

```python
secret_version_name_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `version_number_input`<sup>Optional</sup> <a name="version_number_input" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumberInput"></a>

```python
version_number_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version_name`<sup>Required</sup> <a name="secret_version_name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionName"></a>

```python
secret_version_name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecretsSecretbundleConfig <a name="DataOciSecretsSecretbundleConfig" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_id: str,
  id: str = None,
  secret_version_name: str = None,
  stage: str = None,
  version_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretVersionName">secret_version_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.versionNumber">version_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret_version_name`<sup>Optional</sup> <a name="secret_version_name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretVersionName"></a>

```python
secret_version_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}.

---

##### `version_number`<sup>Optional</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}.

---

### DataOciSecretsSecretbundleSecretBundleContent <a name="DataOciSecretsSecretbundleSecretBundleContent" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecretsSecretbundleSecretBundleContentList <a name="DataOciSecretsSecretbundleSecretBundleContentList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciSecretsSecretbundleSecretBundleContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciSecretsSecretbundleSecretBundleContentOutputReference <a name="DataOciSecretsSecretbundleSecretBundleContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_secrets_secretbundle

dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent">DataOciSecretsSecretbundleSecretBundleContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciSecretsSecretbundleSecretBundleContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent">DataOciSecretsSecretbundleSecretBundleContent</a>

---



