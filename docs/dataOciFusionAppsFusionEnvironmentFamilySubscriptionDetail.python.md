# `dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail` Submodule <a name="`dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail oci_fusion_apps_fusion_environment_family_subscription_detail}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.fusionEnvironmentFamilyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.subscriptions">subscriptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.fusionEnvironmentFamilyIdInput">fusion_environment_family_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.subscriptions"></a>

```python
subscriptions: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList</a>

---

##### `fusion_environment_family_id_input`<sup>Optional</sup> <a name="fusion_environment_family_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.fusionEnvironmentFamilyIdInput"></a>

```python
fusion_environment_family_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_family_subscription_detail#id DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions()
```


### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.classicSubscriptionId">classic_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.skus">skus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classic_subscription_id`<sup>Required</sup> <a name="classic_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.classicSubscriptionId"></a>

```python
classic_subscription_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `skus`<sup>Required</sup> <a name="skus" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.skus"></a>

```python
skus: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptions</a>

---


### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_family_subscription_detail

dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.licensePartDescription">license_part_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.quantity">quantity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `license_part_description`<sup>Required</sup> <a name="license_part_description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.licensePartDescription"></a>

```python
license_part_description: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.quantity"></a>

```python
quantity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku`<sup>Required</sup> <a name="sku" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkusOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilySubscriptionDetail.DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus">DataOciFusionAppsFusionEnvironmentFamilySubscriptionDetailSubscriptionsSkus</a>

---



