# `dataOciFleetAppsManagementRunbook` Submodule <a name="`dataOciFleetAppsManagementRunbook` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementRunbook <a name="DataOciFleetAppsManagementRunbook" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook oci_fleet_apps_management_runbook}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  runbook_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.runbookId">runbook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.runbookId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementRunbook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementRunbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementRunbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.associations">associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList">DataOciFleetAppsManagementRunbookAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.estimatedTime">estimated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookRelevance">runbook_relevance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookIdInput">runbook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookId">runbook_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `associations`<sup>Required</sup> <a name="associations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.associations"></a>

```python
associations: DataOciFleetAppsManagementRunbookAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList">DataOciFleetAppsManagementRunbookAssociationsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_time`<sup>Required</sup> <a name="estimated_time" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.estimatedTime"></a>

```python
estimated_time: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `runbook_relevance`<sup>Required</sup> <a name="runbook_relevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookRelevance"></a>

```python
runbook_relevance: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `runbook_id_input`<sup>Optional</sup> <a name="runbook_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookIdInput"></a>

```python
runbook_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementRunbookAssociations <a name="DataOciFleetAppsManagementRunbookAssociations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations()
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails()
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow()
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps()
```


### DataOciFleetAppsManagementRunbookAssociationsGroups <a name="DataOciFleetAppsManagementRunbookAssociationsGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups()
```


### DataOciFleetAppsManagementRunbookAssociationsGroupsProperties <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties()
```


### DataOciFleetAppsManagementRunbookAssociationsTasks <a name="DataOciFleetAppsManagementRunbookAssociationsTasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables()
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties()
```


### DataOciFleetAppsManagementRunbookConfig <a name="DataOciFleetAppsManagementRunbookConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  runbook_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.runbookId">runbook_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.workflow">workflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.workflow"></a>

```python
workflow: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps"></a>

```python
steps: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow</a>

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps">steps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps"></a>

```python
steps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps</a>

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsList <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups">DataOciFleetAppsManagementRunbookAssociationsGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.properties"></a>

```python
properties: DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups">DataOciFleetAppsManagementRunbookAssociationsGroups</a>

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.runOn">run_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties">DataOciFleetAppsManagementRunbookAssociationsGroupsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `run_on`<sup>Required</sup> <a name="run_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsGroupsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties">DataOciFleetAppsManagementRunbookAssociationsGroupsProperties</a>

---


### DataOciFleetAppsManagementRunbookAssociationsList <a name="DataOciFleetAppsManagementRunbookAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.executionWorkflowDetails">execution_workflow_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList">DataOciFleetAppsManagementRunbookAssociationsGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList">DataOciFleetAppsManagementRunbookAssociationsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations">DataOciFleetAppsManagementRunbookAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_workflow_details`<sup>Required</sup> <a name="execution_workflow_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.executionWorkflowDetails"></a>

```python
execution_workflow_details: DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.groups"></a>

```python
groups: DataOciFleetAppsManagementRunbookAssociationsGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList">DataOciFleetAppsManagementRunbookAssociationsGroupsList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.tasks"></a>

```python
tasks: DataOciFleetAppsManagementRunbookAssociationsTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList">DataOciFleetAppsManagementRunbookAssociationsTasksList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations">DataOciFleetAppsManagementRunbookAssociations</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.associationType">association_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.outputVariableMappings">output_variable_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepProperties">step_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.taskRecordDetails">task_record_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks">DataOciFleetAppsManagementRunbookAssociationsTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

---

##### `output_variable_mappings`<sup>Required</sup> <a name="output_variable_mappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.outputVariableMappings"></a>

```python
output_variable_mappings: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList</a>

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `step_properties`<sup>Required</sup> <a name="step_properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepProperties"></a>

```python
step_properties: DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList</a>

---

##### `task_record_details`<sup>Required</sup> <a name="task_record_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.taskRecordDetails"></a>

```python
task_record_details: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks">DataOciFleetAppsManagementRunbookAssociationsTasks</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails">output_variable_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_variable_details`<sup>Required</sup> <a name="output_variable_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails"></a>

```python
output_variable_details: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName">output_variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_variable_name`<sup>Required</sup> <a name="output_variable_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName"></a>

```python
output_variable_name: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.runOn">run_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `run_on`<sup>Required</sup> <a name="run_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```python
content: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `execution_type`<sup>Required</sup> <a name="execution_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```python
variables: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">output_variables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```python
input_variables: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `output_variables`<sup>Required</sup> <a name="output_variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```python
output_variables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails">execution_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled">is_copy_to_library_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId">task_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_details`<sup>Required</sup> <a name="execution_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails"></a>

```python
execution_details: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList</a>

---

##### `is_copy_to_library_enabled`<sup>Required</sup> <a name="is_copy_to_library_enabled" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled"></a>

```python
is_copy_to_library_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.properties"></a>

```python
properties: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `task_record_id`<sup>Required</sup> <a name="task_record_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId"></a>

```python
task_record_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbook

dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `num_retries`<sup>Required</sup> <a name="num_retries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties</a>

---



