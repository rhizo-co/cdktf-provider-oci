# `dataOciCoreLocalPeeringGateways` Submodule <a name="`dataOciCoreLocalPeeringGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreLocalPeeringGateways <a name="DataOciCoreLocalPeeringGateways" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways oci_core_local_peering_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCoreLocalPeeringGatewaysFilter]] = None,
  id: str = None,
  vcn_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#compartment_id DataOciCoreLocalPeeringGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#id DataOciCoreLocalPeeringGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#vcn_id DataOciCoreLocalPeeringGateways#vcn_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#compartment_id DataOciCoreLocalPeeringGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#filter DataOciCoreLocalPeeringGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#id DataOciCoreLocalPeeringGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#vcn_id DataOciCoreLocalPeeringGateways#vcn_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetVcnId">reset_vcn_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreLocalPeeringGatewaysFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreLocalPeeringGateways resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreLocalPeeringGateways resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreLocalPeeringGateways to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreLocalPeeringGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreLocalPeeringGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList">DataOciCoreLocalPeeringGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.localPeeringGateways">local_peering_gateways</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList">DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filter"></a>

```python
filter: DataOciCoreLocalPeeringGatewaysFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList">DataOciCoreLocalPeeringGatewaysFilterList</a>

---

##### `local_peering_gateways`<sup>Required</sup> <a name="local_peering_gateways" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.localPeeringGateways"></a>

```python
local_peering_gateways: DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList">DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreLocalPeeringGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGateways.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreLocalPeeringGatewaysConfig <a name="DataOciCoreLocalPeeringGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreLocalPeeringGatewaysFilter]] = None,
  id: str = None,
  vcn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#compartment_id DataOciCoreLocalPeeringGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#id DataOciCoreLocalPeeringGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#vcn_id DataOciCoreLocalPeeringGateways#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#compartment_id DataOciCoreLocalPeeringGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreLocalPeeringGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#filter DataOciCoreLocalPeeringGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#id DataOciCoreLocalPeeringGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#vcn_id DataOciCoreLocalPeeringGateways#vcn_id}.

---

### DataOciCoreLocalPeeringGatewaysFilter <a name="DataOciCoreLocalPeeringGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#name DataOciCoreLocalPeeringGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#values DataOciCoreLocalPeeringGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#regex DataOciCoreLocalPeeringGateways#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#name DataOciCoreLocalPeeringGateways#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#values DataOciCoreLocalPeeringGateways#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_local_peering_gateways#regex DataOciCoreLocalPeeringGateways#regex}.

---

### DataOciCoreLocalPeeringGatewaysLocalPeeringGateways <a name="DataOciCoreLocalPeeringGatewaysLocalPeeringGateways" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreLocalPeeringGatewaysFilterList <a name="DataOciCoreLocalPeeringGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreLocalPeeringGatewaysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreLocalPeeringGatewaysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]]

---


### DataOciCoreLocalPeeringGatewaysFilterOutputReference <a name="DataOciCoreLocalPeeringGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreLocalPeeringGatewaysFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysFilter">DataOciCoreLocalPeeringGatewaysFilter</a>]

---


### DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList <a name="DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference <a name="DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_local_peering_gateways

dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.isCrossTenancyPeering">is_cross_tenancy_peering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidr">peer_advertised_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidrDetails">peer_advertised_cidr_details</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerId">peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatus">peering_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatusDetails">peering_status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.routeTableId">route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways">DataOciCoreLocalPeeringGatewaysLocalPeeringGateways</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_cross_tenancy_peering`<sup>Required</sup> <a name="is_cross_tenancy_peering" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.isCrossTenancyPeering"></a>

```python
is_cross_tenancy_peering: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `peer_advertised_cidr`<sup>Required</sup> <a name="peer_advertised_cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidr"></a>

```python
peer_advertised_cidr: str
```

- *Type:* str

---

##### `peer_advertised_cidr_details`<sup>Required</sup> <a name="peer_advertised_cidr_details" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerAdvertisedCidrDetails"></a>

```python
peer_advertised_cidr_details: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

---

##### `peering_status`<sup>Required</sup> <a name="peering_status" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatus"></a>

```python
peering_status: str
```

- *Type:* str

---

##### `peering_status_details`<sup>Required</sup> <a name="peering_status_details" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.peeringStatusDetails"></a>

```python
peering_status_details: str
```

- *Type:* str

---

##### `route_table_id`<sup>Required</sup> <a name="route_table_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.routeTableId"></a>

```python
route_table_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGatewaysOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreLocalPeeringGatewaysLocalPeeringGateways
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreLocalPeeringGateways.DataOciCoreLocalPeeringGatewaysLocalPeeringGateways">DataOciCoreLocalPeeringGatewaysLocalPeeringGateways</a>

---



