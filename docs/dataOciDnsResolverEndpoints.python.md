# `dataOciDnsResolverEndpoints` Submodule <a name="`dataOciDnsResolverEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsResolverEndpointsA <a name="DataOciDnsResolverEndpointsA" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints oci_dns_resolver_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resolver_id: str,
  scope: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDnsResolverEndpointsFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.resolverId">resolver_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#resolver_id DataOciDnsResolverEndpointsA#resolver_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#scope DataOciDnsResolverEndpointsA#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#id DataOciDnsResolverEndpointsA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#name DataOciDnsResolverEndpointsA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#state DataOciDnsResolverEndpointsA#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resolver_id`<sup>Required</sup> <a name="resolver_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.resolverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#resolver_id DataOciDnsResolverEndpointsA#resolver_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#scope DataOciDnsResolverEndpointsA#scope}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#filter DataOciDnsResolverEndpointsA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#id DataOciDnsResolverEndpointsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#name DataOciDnsResolverEndpointsA#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#state DataOciDnsResolverEndpointsA#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDnsResolverEndpointsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDnsResolverEndpointsA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDnsResolverEndpointsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDnsResolverEndpointsA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDnsResolverEndpointsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsResolverEndpointsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList">DataOciDnsResolverEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.resolverEndpoints">resolver_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList">DataOciDnsResolverEndpointsResolverEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.resolverIdInput">resolver_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.resolverId">resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.filter"></a>

```python
filter: DataOciDnsResolverEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList">DataOciDnsResolverEndpointsFilterList</a>

---

##### `resolver_endpoints`<sup>Required</sup> <a name="resolver_endpoints" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.resolverEndpoints"></a>

```python
resolver_endpoints: DataOciDnsResolverEndpointsResolverEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList">DataOciDnsResolverEndpointsResolverEndpointsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDnsResolverEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resolver_id_input`<sup>Optional</sup> <a name="resolver_id_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.resolverIdInput"></a>

```python
resolver_id_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resolver_id`<sup>Required</sup> <a name="resolver_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.resolverId"></a>

```python
resolver_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsResolverEndpointsAConfig <a name="DataOciDnsResolverEndpointsAConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resolver_id: str,
  scope: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDnsResolverEndpointsFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.resolverId">resolver_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#resolver_id DataOciDnsResolverEndpointsA#resolver_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#scope DataOciDnsResolverEndpointsA#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#id DataOciDnsResolverEndpointsA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#name DataOciDnsResolverEndpointsA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#state DataOciDnsResolverEndpointsA#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resolver_id`<sup>Required</sup> <a name="resolver_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.resolverId"></a>

```python
resolver_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#resolver_id DataOciDnsResolverEndpointsA#resolver_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#scope DataOciDnsResolverEndpointsA#scope}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDnsResolverEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#filter DataOciDnsResolverEndpointsA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#id DataOciDnsResolverEndpointsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#name DataOciDnsResolverEndpointsA#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsAConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#state DataOciDnsResolverEndpointsA#state}.

---

### DataOciDnsResolverEndpointsFilter <a name="DataOciDnsResolverEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#name DataOciDnsResolverEndpointsA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#values DataOciDnsResolverEndpointsA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#regex DataOciDnsResolverEndpointsA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#name DataOciDnsResolverEndpointsA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#values DataOciDnsResolverEndpointsA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_resolver_endpoints#regex DataOciDnsResolverEndpointsA#regex}.

---

### DataOciDnsResolverEndpointsResolverEndpoints <a name="DataOciDnsResolverEndpointsResolverEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDnsResolverEndpointsFilterList <a name="DataOciDnsResolverEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDnsResolverEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDnsResolverEndpointsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]]

---


### DataOciDnsResolverEndpointsFilterOutputReference <a name="DataOciDnsResolverEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDnsResolverEndpointsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsFilter">DataOciDnsResolverEndpointsFilter</a>]

---


### DataOciDnsResolverEndpointsResolverEndpointsList <a name="DataOciDnsResolverEndpointsResolverEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDnsResolverEndpointsResolverEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDnsResolverEndpointsResolverEndpointsOutputReference <a name="DataOciDnsResolverEndpointsResolverEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dns_resolver_endpoints

dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.forwardingAddress">forwarding_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.isForwarding">is_forwarding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.isListening">is_listening</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.listeningAddress">listening_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.resolverId">resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpoints">DataOciDnsResolverEndpointsResolverEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `forwarding_address`<sup>Required</sup> <a name="forwarding_address" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.forwardingAddress"></a>

```python
forwarding_address: str
```

- *Type:* str

---

##### `is_forwarding`<sup>Required</sup> <a name="is_forwarding" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.isForwarding"></a>

```python
is_forwarding: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_listening`<sup>Required</sup> <a name="is_listening" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.isListening"></a>

```python
is_listening: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `listening_address`<sup>Required</sup> <a name="listening_address" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.listeningAddress"></a>

```python
listening_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resolver_id`<sup>Required</sup> <a name="resolver_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.resolverId"></a>

```python
resolver_id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDnsResolverEndpointsResolverEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsResolverEndpoints.DataOciDnsResolverEndpointsResolverEndpoints">DataOciDnsResolverEndpointsResolverEndpoints</a>

---



