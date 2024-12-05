# `dataOciOdaOdaPrivateEndpointScanProxies` Submodule <a name="`dataOciOdaOdaPrivateEndpointScanProxies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpointScanProxies <a name="DataOciOdaOdaPrivateEndpointScanProxies" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies oci_oda_oda_private_endpoint_scan_proxies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  oda_private_endpoint_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointScanProxiesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxies#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#id DataOciOdaOdaPrivateEndpointScanProxies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#state DataOciOdaOdaPrivateEndpointScanProxies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.odaPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxies#oda_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#filter DataOciOdaOdaPrivateEndpointScanProxies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#id DataOciOdaOdaPrivateEndpointScanProxies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#state DataOciOdaOdaPrivateEndpointScanProxies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointScanProxiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointScanProxies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointScanProxies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOdaOdaPrivateEndpointScanProxies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointScanProxies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList">DataOciOdaOdaPrivateEndpointScanProxiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.odaPrivateEndpointScanProxyCollection">oda_private_endpoint_scan_proxy_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.odaPrivateEndpointIdInput">oda_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.filter"></a>

```python
filter: DataOciOdaOdaPrivateEndpointScanProxiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList">DataOciOdaOdaPrivateEndpointScanProxiesFilterList</a>

---

##### `oda_private_endpoint_scan_proxy_collection`<sup>Required</sup> <a name="oda_private_endpoint_scan_proxy_collection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.odaPrivateEndpointScanProxyCollection"></a>

```python
oda_private_endpoint_scan_proxy_collection: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointScanProxiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oda_private_endpoint_id_input`<sup>Optional</sup> <a name="oda_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.odaPrivateEndpointIdInput"></a>

```python
oda_private_endpoint_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.odaPrivateEndpointId"></a>

```python
oda_private_endpoint_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointScanProxiesConfig <a name="DataOciOdaOdaPrivateEndpointScanProxiesConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  oda_private_endpoint_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointScanProxiesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxies#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#id DataOciOdaOdaPrivateEndpointScanProxies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#state DataOciOdaOdaPrivateEndpointScanProxies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.odaPrivateEndpointId"></a>

```python
oda_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#oda_private_endpoint_id DataOciOdaOdaPrivateEndpointScanProxies#oda_private_endpoint_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointScanProxiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#filter DataOciOdaOdaPrivateEndpointScanProxies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#id DataOciOdaOdaPrivateEndpointScanProxies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#state DataOciOdaOdaPrivateEndpointScanProxies#state}.

---

### DataOciOdaOdaPrivateEndpointScanProxiesFilter <a name="DataOciOdaOdaPrivateEndpointScanProxiesFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#name DataOciOdaOdaPrivateEndpointScanProxies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#values DataOciOdaOdaPrivateEndpointScanProxies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#regex DataOciOdaOdaPrivateEndpointScanProxies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#name DataOciOdaOdaPrivateEndpointScanProxies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#values DataOciOdaOdaPrivateEndpointScanProxies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoint_scan_proxies#regex DataOciOdaOdaPrivateEndpointScanProxies#regex}.

---

### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection()
```


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems()
```


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointScanProxiesFilterList <a name="DataOciOdaOdaPrivateEndpointScanProxiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOdaOdaPrivateEndpointScanProxiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]]

---


### DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference <a name="DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOdaOdaPrivateEndpointScanProxiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesFilter">DataOciOdaOdaPrivateEndpointScanProxiesFilter</a>]

---


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.odaPrivateEndpointId">oda_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.scanListenerInfos">scan_listener_infos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.scanListenerType">scan_listener_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oda_private_endpoint_id`<sup>Required</sup> <a name="oda_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.odaPrivateEndpointId"></a>

```python
oda_private_endpoint_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `scan_listener_infos`<sup>Required</sup> <a name="scan_listener_infos" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.scanListenerInfos"></a>

```python
scan_listener_infos: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList</a>

---

##### `scan_listener_type`<sup>Required</sup> <a name="scan_listener_type" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.scanListenerType"></a>

```python
scan_listener_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItems</a>

---


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.scanListenerFqdn">scan_listener_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.scanListenerIp">scan_listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.scanListenerPort">scan_listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scan_listener_fqdn`<sup>Required</sup> <a name="scan_listener_fqdn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.scanListenerFqdn"></a>

```python
scan_listener_fqdn: str
```

- *Type:* str

---

##### `scan_listener_ip`<sup>Required</sup> <a name="scan_listener_ip" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.scanListenerIp"></a>

```python
scan_listener_ip: str
```

- *Type:* str

---

##### `scan_listener_port`<sup>Required</sup> <a name="scan_listener_port" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.scanListenerPort"></a>

```python
scan_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfosOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsScanListenerInfos</a>

---


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference <a name="DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_oda_oda_private_endpoint_scan_proxies

dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.items"></a>

```python
items: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpointScanProxies.DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection">DataOciOdaOdaPrivateEndpointScanProxiesOdaPrivateEndpointScanProxyCollection</a>

---



