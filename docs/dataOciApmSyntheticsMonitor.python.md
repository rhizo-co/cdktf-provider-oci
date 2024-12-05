# `dataOciApmSyntheticsMonitor` Submodule <a name="`dataOciApmSyntheticsMonitor` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsMonitor <a name="DataOciApmSyntheticsMonitor" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor oci_apm_synthetics_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor(
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
  monitor_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#apm_domain_id DataOciApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.monitorId">monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#monitor_id DataOciApmSyntheticsMonitor#monitor_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#apm_domain_id DataOciApmSyntheticsMonitor#apm_domain_id}.

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.monitorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#monitor_id DataOciApmSyntheticsMonitor#monitor_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.availabilityConfiguration">availability_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList">DataOciApmSyntheticsMonitorAvailabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.batchIntervalInSeconds">batch_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.configuration">configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList">DataOciApmSyntheticsMonitorConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isIpv6">is_ipv6</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunNow">is_run_now</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunOnce">is_run_once</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.maintenanceWindowSchedule">maintenance_window_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.repeatIntervalInSeconds">repeat_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.schedulingPolicy">scheduling_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptName">script_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptParameters">script_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList">DataOciApmSyntheticsMonitorScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePointCount">vantage_point_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePoints">vantage_points</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList">DataOciApmSyntheticsMonitorVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorIdInput">monitor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorId">monitor_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_configuration`<sup>Required</sup> <a name="availability_configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.availabilityConfiguration"></a>

```python
availability_configuration: DataOciApmSyntheticsMonitorAvailabilityConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList">DataOciApmSyntheticsMonitorAvailabilityConfigurationList</a>

---

##### `batch_interval_in_seconds`<sup>Required</sup> <a name="batch_interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.batchIntervalInSeconds"></a>

```python
batch_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.configuration"></a>

```python
configuration: DataOciApmSyntheticsMonitorConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList">DataOciApmSyntheticsMonitorConfigurationList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ipv6`<sup>Required</sup> <a name="is_ipv6" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isIpv6"></a>

```python
is_ipv6: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_run_now`<sup>Required</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunNow"></a>

```python
is_run_now: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_run_once`<sup>Required</sup> <a name="is_run_once" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunOnce"></a>

```python
is_run_once: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `maintenance_window_schedule`<sup>Required</sup> <a name="maintenance_window_schedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.maintenanceWindowSchedule"></a>

```python
maintenance_window_schedule: DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList</a>

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `repeat_interval_in_seconds`<sup>Required</sup> <a name="repeat_interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.repeatIntervalInSeconds"></a>

```python
repeat_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduling_policy`<sup>Required</sup> <a name="scheduling_policy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.schedulingPolicy"></a>

```python
scheduling_policy: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `script_name`<sup>Required</sup> <a name="script_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptName"></a>

```python
script_name: str
```

- *Type:* str

---

##### `script_parameters`<sup>Required</sup> <a name="script_parameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptParameters"></a>

```python
script_parameters: DataOciApmSyntheticsMonitorScriptParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList">DataOciApmSyntheticsMonitorScriptParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vantage_point_count`<sup>Required</sup> <a name="vantage_point_count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePointCount"></a>

```python
vantage_point_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vantage_points`<sup>Required</sup> <a name="vantage_points" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePoints"></a>

```python
vantage_points: DataOciApmSyntheticsMonitorVantagePointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList">DataOciApmSyntheticsMonitorVantagePointsList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `monitor_id_input`<sup>Optional</sup> <a name="monitor_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorIdInput"></a>

```python
monitor_id_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorId"></a>

```python
monitor_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsMonitorAvailabilityConfiguration <a name="DataOciApmSyntheticsMonitorAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration()
```


### DataOciApmSyntheticsMonitorConfig <a name="DataOciApmSyntheticsMonitorConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  monitor_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#apm_domain_id DataOciApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.monitorId">monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#monitor_id DataOciApmSyntheticsMonitor#monitor_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#apm_domain_id DataOciApmSyntheticsMonitor#apm_domain_id}.

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.monitorId"></a>

```python
monitor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#monitor_id DataOciApmSyntheticsMonitor#monitor_id}.

---

### DataOciApmSyntheticsMonitorConfiguration <a name="DataOciApmSyntheticsMonitorConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration()
```


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails()
```


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate()
```


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey()
```


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails()
```


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword()
```


### DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails()
```


### DataOciApmSyntheticsMonitorConfigurationDnsConfiguration <a name="DataOciApmSyntheticsMonitorConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration()
```


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails()
```


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword()
```


### DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration <a name="DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration()
```


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails()
```


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders()
```


### DataOciApmSyntheticsMonitorConfigurationRequestHeaders <a name="DataOciApmSyntheticsMonitorConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders()
```


### DataOciApmSyntheticsMonitorConfigurationRequestQueryParams <a name="DataOciApmSyntheticsMonitorConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams()
```


### DataOciApmSyntheticsMonitorConfigurationVerifyTexts <a name="DataOciApmSyntheticsMonitorConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts()
```


### DataOciApmSyntheticsMonitorMaintenanceWindowSchedule <a name="DataOciApmSyntheticsMonitorMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule()
```


### DataOciApmSyntheticsMonitorScriptParameters <a name="DataOciApmSyntheticsMonitorScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters()
```


### DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter <a name="DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter()
```


### DataOciApmSyntheticsMonitorVantagePoints <a name="DataOciApmSyntheticsMonitorVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsMonitorAvailabilityConfigurationList <a name="DataOciApmSyntheticsMonitorAvailabilityConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">max_allowed_failures_per_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">min_allowed_runs_per_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration">DataOciApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_allowed_failures_per_interval`<sup>Required</sup> <a name="max_allowed_failures_per_interval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```python
max_allowed_failures_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_allowed_runs_per_interval`<sup>Required</sup> <a name="min_allowed_runs_per_interval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```python
min_allowed_runs_per_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorAvailabilityConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration">DataOciApmSyntheticsMonitorAvailabilityConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">client_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey">private_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```python
client_certificate: DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList</a>

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```python
private_key: DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```python
password: DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">database_wallet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_wallet`<sup>Required</sup> <a name="database_wallet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```python
database_wallet: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList <a name="DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns">is_override_dns</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">override_dns_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_override_dns`<sup>Required</sup> <a name="is_override_dns" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```python
is_override_dns: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `override_dns_ip`<sup>Required</sup> <a name="override_dns_ip" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```python
override_dns_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationDnsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```python
password: DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">vault_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `vault_secret_id`<sup>Required</sup> <a name="vault_secret_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```python
vault_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorConfigurationList <a name="DataOciApmSyntheticsMonitorConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList <a name="DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops">number_of_hops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode">probe_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop">probe_per_hop</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate">transmission_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_of_hops`<sup>Required</sup> <a name="number_of_hops" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```python
number_of_hops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `probe_mode`<sup>Required</sup> <a name="probe_mode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```python
probe_mode: str
```

- *Type:* str

---

##### `probe_per_hop`<sup>Required</sup> <a name="probe_per_hop" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```python
probe_per_hop: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `transmission_rate`<sup>Required</sup> <a name="transmission_rate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```python
transmission_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails">client_certificate_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.configType">config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails">database_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType">database_connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole">database_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails">database_wallet_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration">dns_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes">download_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails">ftp_basic_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol">ftp_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType">ftp_request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode">is_active_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled">is_certificate_validation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled">is_default_snapshot_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried">is_failure_retried</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive">is_query_recursive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled">is_redirection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.nameServer">name_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.recordType">record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails">req_authentication_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme">req_authentication_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders">request_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody">request_post_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams">request_query_params</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes">upload_file_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes">verify_response_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent">verify_response_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts">verify_texts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration">DataOciApmSyntheticsMonitorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate_details`<sup>Required</sup> <a name="client_certificate_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails"></a>

```python
client_certificate_details: DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList</a>

---

##### `config_type`<sup>Required</sup> <a name="config_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.configType"></a>

```python
config_type: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `database_authentication_details`<sup>Required</sup> <a name="database_authentication_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```python
database_authentication_details: DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList</a>

---

##### `database_connection_type`<sup>Required</sup> <a name="database_connection_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType"></a>

```python
database_connection_type: str
```

- *Type:* str

---

##### `database_role`<sup>Required</sup> <a name="database_role" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole"></a>

```python
database_role: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_wallet_details`<sup>Required</sup> <a name="database_wallet_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails"></a>

```python
database_wallet_details: DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList</a>

---

##### `dns_configuration`<sup>Required</sup> <a name="dns_configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration"></a>

```python
dns_configuration: DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList</a>

---

##### `download_size_limit_in_bytes`<sup>Required</sup> <a name="download_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```python
download_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftp_basic_authentication_details`<sup>Required</sup> <a name="ftp_basic_authentication_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```python
ftp_basic_authentication_details: DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList</a>

---

##### `ftp_protocol`<sup>Required</sup> <a name="ftp_protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol"></a>

```python
ftp_protocol: str
```

- *Type:* str

---

##### `ftp_request_type`<sup>Required</sup> <a name="ftp_request_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType"></a>

```python
ftp_request_type: str
```

- *Type:* str

---

##### `is_active_mode`<sup>Required</sup> <a name="is_active_mode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode"></a>

```python
is_active_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_certificate_validation_enabled`<sup>Required</sup> <a name="is_certificate_validation_enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```python
is_certificate_validation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_default_snapshot_enabled`<sup>Required</sup> <a name="is_default_snapshot_enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```python
is_default_snapshot_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_failure_retried`<sup>Required</sup> <a name="is_failure_retried" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried"></a>

```python
is_failure_retried: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_query_recursive`<sup>Required</sup> <a name="is_query_recursive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive"></a>

```python
is_query_recursive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_redirection_enabled`<sup>Required</sup> <a name="is_redirection_enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled"></a>

```python
is_redirection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name_server`<sup>Required</sup> <a name="name_server" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.nameServer"></a>

```python
name_server: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

---

##### `req_authentication_details`<sup>Required</sup> <a name="req_authentication_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```python
req_authentication_details: DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList</a>

---

##### `req_authentication_scheme`<sup>Required</sup> <a name="req_authentication_scheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```python
req_authentication_scheme: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders"></a>

```python
request_headers: DataOciApmSyntheticsMonitorConfigurationRequestHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorConfigurationRequestHeadersList</a>

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `request_post_body`<sup>Required</sup> <a name="request_post_body" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody"></a>

```python
request_post_body: str
```

- *Type:* str

---

##### `request_query_params`<sup>Required</sup> <a name="request_query_params" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams"></a>

```python
request_query_params: DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList</a>

---

##### `upload_file_size_in_bytes`<sup>Required</sup> <a name="upload_file_size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```python
upload_file_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `verify_response_codes`<sup>Required</sup> <a name="verify_response_codes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes"></a>

```python
verify_response_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_response_content`<sup>Required</sup> <a name="verify_response_content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent"></a>

```python
verify_response_content: str
```

- *Type:* str

---

##### `verify_texts`<sup>Required</sup> <a name="verify_texts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts"></a>

```python
verify_texts: DataOciApmSyntheticsMonitorConfigurationVerifyTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorConfigurationVerifyTextsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration">DataOciApmSyntheticsMonitorConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">auth_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">auth_request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">auth_request_post_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">auth_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">auth_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">oauth_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_headers`<sup>Required</sup> <a name="auth_headers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```python
auth_headers: DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `auth_request_method`<sup>Required</sup> <a name="auth_request_method" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```python
auth_request_method: str
```

- *Type:* str

---

##### `auth_request_post_body`<sup>Required</sup> <a name="auth_request_post_body" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```python
auth_request_post_body: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `auth_user_name`<sup>Required</sup> <a name="auth_user_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```python
auth_user_name: str
```

- *Type:* str

---

##### `auth_user_password`<sup>Required</sup> <a name="auth_user_password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```python
auth_user_password: str
```

- *Type:* str

---

##### `oauth_scheme`<sup>Required</sup> <a name="oauth_scheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```python
oauth_scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationRequestHeadersList <a name="DataOciApmSyntheticsMonitorConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue">header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders">DataOciApmSyntheticsMonitorConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `header_value`<sup>Required</sup> <a name="header_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```python
header_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationRequestHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders">DataOciApmSyntheticsMonitorConfigurationRequestHeaders</a>

---


### DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList <a name="DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationRequestQueryParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorConfigurationRequestQueryParams</a>

---


### DataOciApmSyntheticsMonitorConfigurationVerifyTextsList <a name="DataOciApmSyntheticsMonitorConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts">DataOciApmSyntheticsMonitorConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorConfigurationVerifyTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts">DataOciApmSyntheticsMonitorConfigurationVerifyTexts</a>

---


### DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList <a name="DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference <a name="DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---


### DataOciApmSyntheticsMonitorScriptParametersList <a name="DataOciApmSyntheticsMonitorScriptParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList <a name="DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference <a name="DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a>

---


### DataOciApmSyntheticsMonitorScriptParametersOutputReference <a name="DataOciApmSyntheticsMonitorScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten">is_overwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret">is_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter">monitor_script_parameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue">param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters">DataOciApmSyntheticsMonitorScriptParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_overwritten`<sup>Required</sup> <a name="is_overwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten"></a>

```python
is_overwritten: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secret`<sup>Required</sup> <a name="is_secret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret"></a>

```python
is_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_script_parameter`<sup>Required</sup> <a name="monitor_script_parameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter"></a>

```python
monitor_script_parameter: DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a>

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `param_value`<sup>Required</sup> <a name="param_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue"></a>

```python
param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorScriptParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters">DataOciApmSyntheticsMonitorScriptParameters</a>

---


### DataOciApmSyntheticsMonitorVantagePointsList <a name="DataOciApmSyntheticsMonitorVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsMonitorVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsMonitorVantagePointsOutputReference <a name="DataOciApmSyntheticsMonitorVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_monitor

dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.workerList">worker_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints">DataOciApmSyntheticsMonitorVantagePoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `worker_list`<sup>Required</sup> <a name="worker_list" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.workerList"></a>

```python
worker_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsMonitorVantagePoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints">DataOciApmSyntheticsMonitorVantagePoints</a>

---



