# `dataOciGoldenGateDeploymentCertificate` Submodule <a name="`dataOciGoldenGateDeploymentCertificate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentCertificate <a name="DataOciGoldenGateDeploymentCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate oci_golden_gate_deployment_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificate

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_key: str,
  deployment_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.certificateKey">certificate_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#certificate_key DataOciGoldenGateDeploymentCertificate#certificate_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#deployment_id DataOciGoldenGateDeploymentCertificate#deployment_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_key`<sup>Required</sup> <a name="certificate_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.certificateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#certificate_key DataOciGoldenGateDeploymentCertificate#certificate_key}.

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#deployment_id DataOciGoldenGateDeploymentCertificate#deployment_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificate

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificate

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificate

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificate

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateDeploymentCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateDeploymentCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.authorityKeyId">authority_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateContent">certificate_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isCa">is_ca</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isSelfSigned">is_self_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.md5Hash">md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeyAlgorithm">public_key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeySize">public_key_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.serial">serial</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.sha1Hash">sha1_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subjectKeyId">subject_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidFrom">time_valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidTo">time_valid_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKeyInput">certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKey">certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authority_key_id`<sup>Required</sup> <a name="authority_key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.authorityKeyId"></a>

```python
authority_key_id: str
```

- *Type:* str

---

##### `certificate_content`<sup>Required</sup> <a name="certificate_content" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateContent"></a>

```python
certificate_content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ca`<sup>Required</sup> <a name="is_ca" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isCa"></a>

```python
is_ca: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_self_signed`<sup>Required</sup> <a name="is_self_signed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.isSelfSigned"></a>

```python
is_self_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `md5_hash`<sup>Required</sup> <a name="md5_hash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.md5Hash"></a>

```python
md5_hash: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `public_key_algorithm`<sup>Required</sup> <a name="public_key_algorithm" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeyAlgorithm"></a>

```python
public_key_algorithm: str
```

- *Type:* str

---

##### `public_key_size`<sup>Required</sup> <a name="public_key_size" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.publicKeySize"></a>

```python
public_key_size: str
```

- *Type:* str

---

##### `serial`<sup>Required</sup> <a name="serial" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.serial"></a>

```python
serial: str
```

- *Type:* str

---

##### `sha1_hash`<sup>Required</sup> <a name="sha1_hash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.sha1Hash"></a>

```python
sha1_hash: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_key_id`<sup>Required</sup> <a name="subject_key_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.subjectKeyId"></a>

```python
subject_key_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_valid_from`<sup>Required</sup> <a name="time_valid_from" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidFrom"></a>

```python
time_valid_from: str
```

- *Type:* str

---

##### `time_valid_to`<sup>Required</sup> <a name="time_valid_to" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.timeValidTo"></a>

```python
time_valid_to: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `certificate_key_input`<sup>Optional</sup> <a name="certificate_key_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKeyInput"></a>

```python
certificate_key_input: str
```

- *Type:* str

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `certificate_key`<sup>Required</sup> <a name="certificate_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.certificateKey"></a>

```python
certificate_key: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentCertificateConfig <a name="DataOciGoldenGateDeploymentCertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployment_certificate

dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_key: str,
  deployment_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.certificateKey">certificate_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#certificate_key DataOciGoldenGateDeploymentCertificate#certificate_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#deployment_id DataOciGoldenGateDeploymentCertificate#deployment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_key`<sup>Required</sup> <a name="certificate_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.certificateKey"></a>

```python
certificate_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#certificate_key DataOciGoldenGateDeploymentCertificate#certificate_key}.

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentCertificate.DataOciGoldenGateDeploymentCertificateConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_certificate#deployment_id DataOciGoldenGateDeploymentCertificate#deployment_id}.

---



