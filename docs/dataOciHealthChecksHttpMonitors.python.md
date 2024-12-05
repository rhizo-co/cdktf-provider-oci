# `dataOciHealthChecksHttpMonitors` Submodule <a name="`dataOciHealthChecksHttpMonitors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksHttpMonitors <a name="DataOciHealthChecksHttpMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors oci_health_checks_http_monitors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors(
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
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpMonitorsFilter]] = None,
  home_region: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#compartment_id DataOciHealthChecksHttpMonitors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#display_name DataOciHealthChecksHttpMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.homeRegion">home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#home_region DataOciHealthChecksHttpMonitors#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#id DataOciHealthChecksHttpMonitors#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#compartment_id DataOciHealthChecksHttpMonitors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#display_name DataOciHealthChecksHttpMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#filter DataOciHealthChecksHttpMonitors#filter}

---

##### `home_region`<sup>Optional</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.homeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#home_region DataOciHealthChecksHttpMonitors#home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#id DataOciHealthChecksHttpMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetHomeRegion">reset_home_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpMonitorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_home_region` <a name="reset_home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetHomeRegion"></a>

```python
def reset_home_region() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciHealthChecksHttpMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciHealthChecksHttpMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciHealthChecksHttpMonitors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciHealthChecksHttpMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksHttpMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList">DataOciHealthChecksHttpMonitorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.httpMonitors">http_monitors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList">DataOciHealthChecksHttpMonitorsHttpMonitorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.homeRegionInput">home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.filter"></a>

```python
filter: DataOciHealthChecksHttpMonitorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList">DataOciHealthChecksHttpMonitorsFilterList</a>

---

##### `http_monitors`<sup>Required</sup> <a name="http_monitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.httpMonitors"></a>

```python
http_monitors: DataOciHealthChecksHttpMonitorsHttpMonitorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList">DataOciHealthChecksHttpMonitorsHttpMonitorsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]

---

##### `home_region_input`<sup>Optional</sup> <a name="home_region_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.homeRegionInput"></a>

```python
home_region_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksHttpMonitorsConfig <a name="DataOciHealthChecksHttpMonitorsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpMonitorsFilter]] = None,
  home_region: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#compartment_id DataOciHealthChecksHttpMonitors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#display_name DataOciHealthChecksHttpMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.homeRegion">home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#home_region DataOciHealthChecksHttpMonitors#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#id DataOciHealthChecksHttpMonitors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#compartment_id DataOciHealthChecksHttpMonitors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#display_name DataOciHealthChecksHttpMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#filter DataOciHealthChecksHttpMonitors#filter}

---

##### `home_region`<sup>Optional</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#home_region DataOciHealthChecksHttpMonitors#home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#id DataOciHealthChecksHttpMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciHealthChecksHttpMonitorsFilter <a name="DataOciHealthChecksHttpMonitorsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#name DataOciHealthChecksHttpMonitors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#values DataOciHealthChecksHttpMonitors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#regex DataOciHealthChecksHttpMonitors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#name DataOciHealthChecksHttpMonitors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#values DataOciHealthChecksHttpMonitors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitors#regex DataOciHealthChecksHttpMonitors#regex}.

---

### DataOciHealthChecksHttpMonitorsHttpMonitors <a name="DataOciHealthChecksHttpMonitorsHttpMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksHttpMonitorsFilterList <a name="DataOciHealthChecksHttpMonitorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksHttpMonitorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciHealthChecksHttpMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]]

---


### DataOciHealthChecksHttpMonitorsFilterOutputReference <a name="DataOciHealthChecksHttpMonitorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciHealthChecksHttpMonitorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsFilter">DataOciHealthChecksHttpMonitorsFilter</a>]

---


### DataOciHealthChecksHttpMonitorsHttpMonitorsList <a name="DataOciHealthChecksHttpMonitorsHttpMonitorsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference <a name="DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_http_monitors

dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.resultsUrl">results_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.vantagePointNames">vantage_point_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitors">DataOciHealthChecksHttpMonitorsHttpMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `results_url`<sup>Required</sup> <a name="results_url" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.resultsUrl"></a>

```python
results_url: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vantage_point_names`<sup>Required</sup> <a name="vantage_point_names" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.vantagePointNames"></a>

```python
vantage_point_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksHttpMonitorsHttpMonitors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitors.DataOciHealthChecksHttpMonitorsHttpMonitors">DataOciHealthChecksHttpMonitorsHttpMonitors</a>

---



