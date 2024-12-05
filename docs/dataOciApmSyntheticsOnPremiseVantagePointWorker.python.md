# `dataOciApmSyntheticsOnPremiseVantagePointWorker` Submodule <a name="`dataOciApmSyntheticsOnPremiseVantagePointWorker` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointWorker <a name="DataOciApmSyntheticsOnPremiseVantagePointWorker" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker(
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
  on_premise_vantage_point_id: str,
  worker_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.workerId">worker_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#worker_id DataOciApmSyntheticsOnPremiseVantagePointWorker#worker_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.onPremiseVantagePointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.workerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#worker_id DataOciApmSyntheticsOnPremiseVantagePointWorker#worker_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmSyntheticsOnPremiseVantagePointWorker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmSyntheticsOnPremiseVantagePointWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsOnPremiseVantagePointWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails">configuration_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo">geo_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo">identity_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.monitorList">monitor_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.opvpId">opvp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.opvpName">opvp_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey">resource_principal_token_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId">runtime_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp">time_last_sync_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails">version_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput">on_premise_vantage_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.workerIdInput">worker_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.workerId">worker_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails"></a>

```python
configuration_details: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `geo_info`<sup>Required</sup> <a name="geo_info" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo"></a>

```python
geo_info: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_info`<sup>Required</sup> <a name="identity_info" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo"></a>

```python
identity_info: DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a>

---

##### `monitor_list`<sup>Required</sup> <a name="monitor_list" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.monitorList"></a>

```python
monitor_list: DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `opvp_id`<sup>Required</sup> <a name="opvp_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.opvpId"></a>

```python
opvp_id: str
```

- *Type:* str

---

##### `opvp_name`<sup>Required</sup> <a name="opvp_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.opvpName"></a>

```python
opvp_name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_principal_token_public_key`<sup>Required</sup> <a name="resource_principal_token_public_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey"></a>

```python
resource_principal_token_public_key: str
```

- *Type:* str

---

##### `runtime_id`<sup>Required</sup> <a name="runtime_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId"></a>

```python
runtime_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_sync_up`<sup>Required</sup> <a name="time_last_sync_up" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp"></a>

```python
time_last_sync_up: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_details`<sup>Required</sup> <a name="version_details" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails"></a>

```python
version_details: DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a>

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id_input`<sup>Optional</sup> <a name="on_premise_vantage_point_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput"></a>

```python
on_premise_vantage_point_id_input: str
```

- *Type:* str

---

##### `worker_id_input`<sup>Optional</sup> <a name="worker_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.workerIdInput"></a>

```python
worker_id_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  on_premise_vantage_point_id: str,
  worker_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerId">worker_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#worker_id DataOciApmSyntheticsOnPremiseVantagePointWorker#worker_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id DataOciApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id DataOciApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `worker_id`<sup>Required</sup> <a name="worker_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerId"></a>

```python
worker_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_on_premise_vantage_point_worker#worker_id DataOciApmSyntheticsOnPremiseVantagePointWorker#worker_id}.

---

### DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo()
```


### DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct()
```


### DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId">apm_short_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint">collector_end_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_short_id`<sup>Required</sup> <a name="apm_short_id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId"></a>

```python
apm_short_id: str
```

- *Type:* str

---

##### `collector_end_point`<sup>Required</sup> <a name="collector_end_point" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint"></a>

```python
collector_end_point: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">DataOciApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow">is_run_now</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned">time_assigned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_run_now`<sup>Required</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow"></a>

```python
is_run_now: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `time_assigned`<sup>Required</sup> <a name="time_assigned" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned"></a>

```python
time_assigned: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">DataOciApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a>

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference <a name="DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_synthetics_on_premise_vantage_point_worker

dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion">latest_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion">min_supported_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion"></a>

```python
latest_version: str
```

- *Type:* str

---

##### `min_supported_version`<sup>Required</sup> <a name="min_supported_version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion"></a>

```python
min_supported_version: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsOnPremiseVantagePointWorker.DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">DataOciApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a>

---



