# `dataOciApmSyntheticsScripts` Submodule <a name="`dataOciApmSyntheticsScripts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsScripts <a name="DataOciApmSyntheticsScripts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts oci_apm_synthetics_scripts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts(
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
  content_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsScriptsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#apm_domain_id DataOciApmSyntheticsScripts#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#content_type DataOciApmSyntheticsScripts#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#display_name DataOciApmSyntheticsScripts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#id DataOciApmSyntheticsScripts#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#apm_domain_id DataOciApmSyntheticsScripts#apm_domain_id}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#content_type DataOciApmSyntheticsScripts#content_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#display_name DataOciApmSyntheticsScripts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#filter DataOciApmSyntheticsScripts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#id DataOciApmSyntheticsScripts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsScriptsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]

---

##### `reset_content_type` <a name="reset_content_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsScripts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsScripts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsScripts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsScripts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsScripts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList">DataOciApmSyntheticsScriptsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.scriptCollection">script_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList">DataOciApmSyntheticsScriptsScriptCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.filter"></a>

```python
filter: DataOciApmSyntheticsScriptsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList">DataOciApmSyntheticsScriptsFilterList</a>

---

##### `script_collection`<sup>Required</sup> <a name="script_collection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.scriptCollection"></a>

```python
script_collection: DataOciApmSyntheticsScriptsScriptCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList">DataOciApmSyntheticsScriptsScriptCollectionList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsScriptsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScripts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsScriptsConfig <a name="DataOciApmSyntheticsScriptsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  content_type: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsScriptsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#apm_domain_id DataOciApmSyntheticsScripts#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#content_type DataOciApmSyntheticsScripts#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#display_name DataOciApmSyntheticsScripts#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#id DataOciApmSyntheticsScripts#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#apm_domain_id DataOciApmSyntheticsScripts#apm_domain_id}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#content_type DataOciApmSyntheticsScripts#content_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#display_name DataOciApmSyntheticsScripts#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsScriptsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#filter DataOciApmSyntheticsScripts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#id DataOciApmSyntheticsScripts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciApmSyntheticsScriptsFilter <a name="DataOciApmSyntheticsScriptsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#name DataOciApmSyntheticsScripts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#values DataOciApmSyntheticsScripts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#regex DataOciApmSyntheticsScripts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#name DataOciApmSyntheticsScripts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#values DataOciApmSyntheticsScripts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_scripts#regex DataOciApmSyntheticsScripts#regex}.

---

### DataOciApmSyntheticsScriptsScriptCollection <a name="DataOciApmSyntheticsScriptsScriptCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollection()
```


### DataOciApmSyntheticsScriptsScriptCollectionItems <a name="DataOciApmSyntheticsScriptsScriptCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItems()
```


### DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap()
```


### DataOciApmSyntheticsScriptsScriptCollectionItemsParameters <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParameters()
```


### DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsScriptsFilterList <a name="DataOciApmSyntheticsScriptsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsScriptsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciApmSyntheticsScriptsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]]

---


### DataOciApmSyntheticsScriptsFilterOutputReference <a name="DataOciApmSyntheticsScriptsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciApmSyntheticsScriptsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsFilter">DataOciApmSyntheticsScriptsFilter</a>]

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsList <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.invalid">invalid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.disabled"></a>

```python
disabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.enabled"></a>

```python
enabled: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.invalid"></a>

```python
invalid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap">DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMap</a>

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.contentFileName">content_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.contentSizeInBytes">content_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.monitorStatusCountMap">monitor_status_count_map</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList">DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.timeUploaded">time_uploaded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItems">DataOciApmSyntheticsScriptsScriptCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_file_name`<sup>Required</sup> <a name="content_file_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.contentFileName"></a>

```python
content_file_name: str
```

- *Type:* str

---

##### `content_size_in_bytes`<sup>Required</sup> <a name="content_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.contentSizeInBytes"></a>

```python
content_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_status_count_map`<sup>Required</sup> <a name="monitor_status_count_map" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.monitorStatusCountMap"></a>

```python
monitor_status_count_map: DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList">DataOciApmSyntheticsScriptsScriptCollectionItemsMonitorStatusCountMapList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.parameters"></a>

```python
parameters: DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList">DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_uploaded`<sup>Required</sup> <a name="time_uploaded" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.timeUploaded"></a>

```python
time_uploaded: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsScriptsScriptCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItems">DataOciApmSyntheticsScriptsScriptCollectionItems</a>

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.isOverwritten">is_overwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.isSecret">is_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.scriptParameter">script_parameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList">DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParameters">DataOciApmSyntheticsScriptsScriptCollectionItemsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_overwritten`<sup>Required</sup> <a name="is_overwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.isOverwritten"></a>

```python
is_overwritten: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secret`<sup>Required</sup> <a name="is_secret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.isSecret"></a>

```python
is_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `script_parameter`<sup>Required</sup> <a name="script_parameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.scriptParameter"></a>

```python
script_parameter: DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList">DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsScriptsScriptCollectionItemsParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParameters">DataOciApmSyntheticsScriptsScriptCollectionItemsParameters</a>

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference <a name="DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.isSecret">is_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter">DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_secret`<sup>Required</sup> <a name="is_secret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.isSecret"></a>

```python
is_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter">DataOciApmSyntheticsScriptsScriptCollectionItemsParametersScriptParameter</a>

---


### DataOciApmSyntheticsScriptsScriptCollectionList <a name="DataOciApmSyntheticsScriptsScriptCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsScriptsScriptCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsScriptsScriptCollectionOutputReference <a name="DataOciApmSyntheticsScriptsScriptCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_scripts

dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList">DataOciApmSyntheticsScriptsScriptCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollection">DataOciApmSyntheticsScriptsScriptCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.items"></a>

```python
items: DataOciApmSyntheticsScriptsScriptCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionItemsList">DataOciApmSyntheticsScriptsScriptCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsScriptsScriptCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScripts.DataOciApmSyntheticsScriptsScriptCollection">DataOciApmSyntheticsScriptsScriptCollection</a>

---



