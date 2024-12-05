# `dataOciHealthChecksPingMonitors` Submodule <a name="`dataOciHealthChecksPingMonitors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingMonitors <a name="DataOciHealthChecksPingMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors oci_health_checks_ping_monitors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors(
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
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingMonitorsFilter]] = None,
  home_region: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#compartment_id DataOciHealthChecksPingMonitors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#display_name DataOciHealthChecksPingMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.homeRegion">home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#home_region DataOciHealthChecksPingMonitors#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#id DataOciHealthChecksPingMonitors#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#compartment_id DataOciHealthChecksPingMonitors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#display_name DataOciHealthChecksPingMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#filter DataOciHealthChecksPingMonitors#filter}

---

##### `home_region`<sup>Optional</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.homeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#home_region DataOciHealthChecksPingMonitors#home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#id DataOciHealthChecksPingMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetHomeRegion">reset_home_region</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingMonitorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_home_region` <a name="reset_home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetHomeRegion"></a>

```python
def reset_home_region() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciHealthChecksPingMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciHealthChecksPingMonitors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciHealthChecksPingMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList">DataOciHealthChecksPingMonitorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.pingMonitors">ping_monitors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList">DataOciHealthChecksPingMonitorsPingMonitorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegionInput">home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filter"></a>

```python
filter: DataOciHealthChecksPingMonitorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList">DataOciHealthChecksPingMonitorsFilterList</a>

---

##### `ping_monitors`<sup>Required</sup> <a name="ping_monitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.pingMonitors"></a>

```python
ping_monitors: DataOciHealthChecksPingMonitorsPingMonitorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList">DataOciHealthChecksPingMonitorsPingMonitorsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]

---

##### `home_region_input`<sup>Optional</sup> <a name="home_region_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegionInput"></a>

```python
home_region_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingMonitorsConfig <a name="DataOciHealthChecksPingMonitorsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingMonitorsFilter]] = None,
  home_region: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#compartment_id DataOciHealthChecksPingMonitors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#display_name DataOciHealthChecksPingMonitors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.homeRegion">home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#home_region DataOciHealthChecksPingMonitors#home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#id DataOciHealthChecksPingMonitors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#compartment_id DataOciHealthChecksPingMonitors#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#display_name DataOciHealthChecksPingMonitors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#filter DataOciHealthChecksPingMonitors#filter}

---

##### `home_region`<sup>Optional</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#home_region DataOciHealthChecksPingMonitors#home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#id DataOciHealthChecksPingMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciHealthChecksPingMonitorsFilter <a name="DataOciHealthChecksPingMonitorsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#name DataOciHealthChecksPingMonitors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#values DataOciHealthChecksPingMonitors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#regex DataOciHealthChecksPingMonitors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#name DataOciHealthChecksPingMonitors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#values DataOciHealthChecksPingMonitors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_monitors#regex DataOciHealthChecksPingMonitors#regex}.

---

### DataOciHealthChecksPingMonitorsPingMonitors <a name="DataOciHealthChecksPingMonitorsPingMonitors" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingMonitorsFilterList <a name="DataOciHealthChecksPingMonitorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksPingMonitorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciHealthChecksPingMonitorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]]

---


### DataOciHealthChecksPingMonitorsFilterOutputReference <a name="DataOciHealthChecksPingMonitorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciHealthChecksPingMonitorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsFilter">DataOciHealthChecksPingMonitorsFilter</a>]

---


### DataOciHealthChecksPingMonitorsPingMonitorsList <a name="DataOciHealthChecksPingMonitorsPingMonitorsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciHealthChecksPingMonitorsPingMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciHealthChecksPingMonitorsPingMonitorsOutputReference <a name="DataOciHealthChecksPingMonitorsPingMonitorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_health_checks_ping_monitors

dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.resultsUrl">results_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.vantagePointNames">vantage_point_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors">DataOciHealthChecksPingMonitorsPingMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `results_url`<sup>Required</sup> <a name="results_url" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.resultsUrl"></a>

```python
results_url: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vantage_point_names`<sup>Required</sup> <a name="vantage_point_names" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.vantagePointNames"></a>

```python
vantage_point_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciHealthChecksPingMonitorsPingMonitors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingMonitors.DataOciHealthChecksPingMonitorsPingMonitors">DataOciHealthChecksPingMonitorsPingMonitors</a>

---



