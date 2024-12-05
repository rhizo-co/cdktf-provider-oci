# `dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage` Submodule <a name="`dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage oci_fusion_apps_fusion_environment_family_limits_and_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_family_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.fusionEnvironmentFamilyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.developmentLimitAndUsage">development_limit_and_usage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.productionLimitAndUsage">production_limit_and_usage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.testLimitAndUsage">test_limit_and_usage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.fusionEnvironmentFamilyIdInput">fusion_environment_family_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `development_limit_and_usage`<sup>Required</sup> <a name="development_limit_and_usage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.developmentLimitAndUsage"></a>

```python
development_limit_and_usage: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList</a>

---

##### `production_limit_and_usage`<sup>Required</sup> <a name="production_limit_and_usage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.productionLimitAndUsage"></a>

```python
production_limit_and_usage: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList</a>

---

##### `test_limit_and_usage`<sup>Required</sup> <a name="test_limit_and_usage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.testLimitAndUsage"></a>

```python
test_limit_and_usage: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList</a>

---

##### `fusion_environment_family_id_input`<sup>Optional</sup> <a name="fusion_environment_family_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.fusionEnvironmentFamilyIdInput"></a>

```python
fusion_environment_family_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_family_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_limits_and_usage#id DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage()
```


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage()
```


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageDevelopmentLimitAndUsage</a>

---


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageProductionLimitAndUsage</a>

---


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_limits_and_usage

dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsage.DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage">DataOciFusionAppsFusionEnvironmentFamilyLimitsAndUsageTestLimitAndUsage</a>

---



