# `dataOciComputeCloudAtCustomerCccInfrastructure` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructure <a name="DataOciComputeCloudAtCustomerCccInfrastructure" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure oci_compute_cloud_at_customer_ccc_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ccc_infrastructure_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.cccInfrastructureId">ccc_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ccc_infrastructure_id`<sup>Required</sup> <a name="ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.cccInfrastructureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId">ccc_upgrade_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails">connection_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState">connection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory">infrastructure_inventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration">infrastructure_network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint">provisioning_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin">provisioning_pin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation">upgrade_information</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput">ccc_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId">ccc_infrastructure_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ccc_upgrade_schedule_id`<sup>Required</sup> <a name="ccc_upgrade_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId"></a>

```python
ccc_upgrade_schedule_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_details`<sup>Required</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails"></a>

```python
connection_details: str
```

- *Type:* str

---

##### `connection_state`<sup>Required</sup> <a name="connection_state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState"></a>

```python
connection_state: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_inventory`<sup>Required</sup> <a name="infrastructure_inventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory"></a>

```python
infrastructure_inventory: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a>

---

##### `infrastructure_network_configuration`<sup>Required</sup> <a name="infrastructure_network_configuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration"></a>

```python
infrastructure_network_configuration: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `provisioning_fingerprint`<sup>Required</sup> <a name="provisioning_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint"></a>

```python
provisioning_fingerprint: str
```

- *Type:* str

---

##### `provisioning_pin`<sup>Required</sup> <a name="provisioning_pin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin"></a>

```python
provisioning_pin: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgrade_information`<sup>Required</sup> <a name="upgrade_information" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation"></a>

```python
upgrade_information: DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a>

---

##### `ccc_infrastructure_id_input`<sup>Optional</sup> <a name="ccc_infrastructure_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput"></a>

```python
ccc_infrastructure_id_input: str
```

- *Type:* str

---

##### `ccc_infrastructure_id`<sup>Required</sup> <a name="ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId"></a>

```python
ccc_infrastructure_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructureConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ccc_infrastructure_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId">ccc_infrastructure_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ccc_infrastructure_id`<sup>Required</sup> <a name="ccc_infrastructure_id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId"></a>

```python
ccc_infrastructure_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}.

---

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory()
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration()
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic()
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation()
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic()
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes()
```


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">capacity_storage_tray_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount">compute_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount">management_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">performance_storage_tray_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_storage_tray_count`<sup>Required</sup> <a name="capacity_storage_tray_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```python
capacity_storage_tray_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_node_count`<sup>Required</sup> <a name="compute_node_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```python
compute_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `management_node_count`<sup>Required</sup> <a name="management_node_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```python
management_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `performance_storage_tray_count`<sup>Required</sup> <a name="performance_storage_tray_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```python
performance_storage_tray_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">bgp_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">oracle_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">peer_information</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_topology`<sup>Required</sup> <a name="bgp_topology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```python
bgp_topology: str
```

- *Type:* str

---

##### `oracle_asn`<sup>Required</sup> <a name="oracle_asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```python
oracle_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_information`<sup>Required</sup> <a name="peer_information" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```python
peer_information: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">uplink_hsrp_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">uplink_vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uplink_hsrp_group`<sup>Required</sup> <a name="uplink_hsrp_group" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```python
uplink_hsrp_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_vlan`<sup>Required</sup> <a name="uplink_vlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```python
uplink_vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">infrastructure_routing_dynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">infrastructure_routing_static</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes">management_nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">mgmt_vip_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">mgmt_vip_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps">spine_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip">spine_vip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">uplink_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">uplink_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">uplink_netmask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">uplink_port_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">uplink_port_forward_error_correction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">uplink_port_speed_in_gbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">uplink_vlan_mtu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_routing_dynamic`<sup>Required</sup> <a name="infrastructure_routing_dynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```python
infrastructure_routing_dynamic: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `infrastructure_routing_static`<sup>Required</sup> <a name="infrastructure_routing_static" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```python
infrastructure_routing_static: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `management_nodes`<sup>Required</sup> <a name="management_nodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```python
management_nodes: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `mgmt_vip_hostname`<sup>Required</sup> <a name="mgmt_vip_hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```python
mgmt_vip_hostname: str
```

- *Type:* str

---

##### `mgmt_vip_ip`<sup>Required</sup> <a name="mgmt_vip_ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```python
mgmt_vip_ip: str
```

- *Type:* str

---

##### `spine_ips`<sup>Required</sup> <a name="spine_ips" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```python
spine_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spine_vip`<sup>Required</sup> <a name="spine_vip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```python
spine_vip: str
```

- *Type:* str

---

##### `uplink_domain`<sup>Required</sup> <a name="uplink_domain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```python
uplink_domain: str
```

- *Type:* str

---

##### `uplink_gateway_ip`<sup>Required</sup> <a name="uplink_gateway_ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```python
uplink_gateway_ip: str
```

- *Type:* str

---

##### `uplink_netmask`<sup>Required</sup> <a name="uplink_netmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```python
uplink_netmask: str
```

- *Type:* str

---

##### `uplink_port_count`<sup>Required</sup> <a name="uplink_port_count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```python
uplink_port_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_port_forward_error_correction`<sup>Required</sup> <a name="uplink_port_forward_error_correction" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```python
uplink_port_forward_error_correction: str
```

- *Type:* str

---

##### `uplink_port_speed_in_gbps`<sup>Required</sup> <a name="uplink_port_speed_in_gbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```python
uplink_port_speed_in_gbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_vlan_mtu`<sup>Required</sup> <a name="uplink_vlan_mtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```python
uplink_vlan_mtu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_compute_cloud_at_customer_ccc_infrastructure

dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion">current_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration">scheduled_upgrade_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">time_of_scheduled_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_version`<sup>Required</sup> <a name="current_version" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion"></a>

```python
current_version: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scheduled_upgrade_duration`<sup>Required</sup> <a name="scheduled_upgrade_duration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```python
scheduled_upgrade_duration: str
```

- *Type:* str

---

##### `time_of_scheduled_upgrade`<sup>Required</sup> <a name="time_of_scheduled_upgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```python
time_of_scheduled_upgrade: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a>

---



