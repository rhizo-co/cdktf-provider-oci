# `dataOciFusionAppsFusionEnvironmentFamilies` Submodule <a name="`dataOciFusionAppsFusionEnvironmentFamilies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentFamilies <a name="DataOciFusionAppsFusionEnvironmentFamilies" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families oci_fusion_apps_fusion_environment_families}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentFamiliesFilter]] = None,
  fusion_environment_family_id: str = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#compartment_id DataOciFusionAppsFusionEnvironmentFamilies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#display_name DataOciFusionAppsFusionEnvironmentFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilies#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#id DataOciFusionAppsFusionEnvironmentFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#state DataOciFusionAppsFusionEnvironmentFamilies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#compartment_id DataOciFusionAppsFusionEnvironmentFamilies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#display_name DataOciFusionAppsFusionEnvironmentFamilies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#filter DataOciFusionAppsFusionEnvironmentFamilies#filter}

---

##### `fusion_environment_family_id`<sup>Optional</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.fusionEnvironmentFamilyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilies#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#id DataOciFusionAppsFusionEnvironmentFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#state DataOciFusionAppsFusionEnvironmentFamilies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFusionEnvironmentFamilyId">reset_fusion_environment_family_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentFamiliesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_fusion_environment_family_id` <a name="reset_fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFusionEnvironmentFamilyId"></a>

```python
def reset_fusion_environment_family_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamilies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentFamilies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamilies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList">DataOciFusionAppsFusionEnvironmentFamiliesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyCollection">fusion_environment_family_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyIdInput">fusion_environment_family_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filter"></a>

```python
filter: DataOciFusionAppsFusionEnvironmentFamiliesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList">DataOciFusionAppsFusionEnvironmentFamiliesFilterList</a>

---

##### `fusion_environment_family_collection`<sup>Required</sup> <a name="fusion_environment_family_collection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyCollection"></a>

```python
fusion_environment_family_collection: DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentFamiliesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]

---

##### `fusion_environment_family_id_input`<sup>Optional</sup> <a name="fusion_environment_family_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyIdInput"></a>

```python
fusion_environment_family_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentFamiliesConfig <a name="DataOciFusionAppsFusionEnvironmentFamiliesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentFamiliesFilter]] = None,
  fusion_environment_family_id: str = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#compartment_id DataOciFusionAppsFusionEnvironmentFamilies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#display_name DataOciFusionAppsFusionEnvironmentFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilies#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#id DataOciFusionAppsFusionEnvironmentFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#state DataOciFusionAppsFusionEnvironmentFamilies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#compartment_id DataOciFusionAppsFusionEnvironmentFamilies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#display_name DataOciFusionAppsFusionEnvironmentFamilies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentFamiliesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#filter DataOciFusionAppsFusionEnvironmentFamilies#filter}

---

##### `fusion_environment_family_id`<sup>Optional</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilies#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#id DataOciFusionAppsFusionEnvironmentFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#state DataOciFusionAppsFusionEnvironmentFamilies#state}.

---

### DataOciFusionAppsFusionEnvironmentFamiliesFilter <a name="DataOciFusionAppsFusionEnvironmentFamiliesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#name DataOciFusionAppsFusionEnvironmentFamilies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#values DataOciFusionAppsFusionEnvironmentFamilies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#regex DataOciFusionAppsFusionEnvironmentFamilies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#name DataOciFusionAppsFusionEnvironmentFamilies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#values DataOciFusionAppsFusionEnvironmentFamilies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#regex DataOciFusionAppsFusionEnvironmentFamilies#regex}.

---

### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection()
```


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems()
```


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentFamiliesFilterList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentFamiliesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]]

---


### DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFusionAppsFusionEnvironmentFamiliesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter">DataOciFusionAppsFusionEnvironmentFamiliesFilter</a>]

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance">concurrent_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterly_upgrade_begin_times</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrent_maintenance`<sup>Required</sup> <a name="concurrent_maintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance"></a>

```python
concurrent_maintenance: str
```

- *Type:* str

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `quarterly_upgrade_begin_times`<sup>Required</sup> <a name="quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```python
quarterly_upgrade_begin_times: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.familyMaintenancePolicy">family_maintenance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.isSubscriptionUpdateNeeded">is_subscription_update_needed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.systemName">system_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `family_maintenance_policy`<sup>Required</sup> <a name="family_maintenance_policy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.familyMaintenancePolicy"></a>

```python
family_maintenance_policy: DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_subscription_update_needed`<sup>Required</sup> <a name="is_subscription_update_needed" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.isSubscriptionUpdateNeeded"></a>

```python
is_subscription_update_needed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.subscriptionIds"></a>

```python
subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_name`<sup>Required</sup> <a name="system_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.systemName"></a>

```python
system_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_families

dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.items"></a>

```python
items: DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection</a>

---



