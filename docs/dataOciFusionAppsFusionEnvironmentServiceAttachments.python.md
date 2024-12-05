# `dataOciFusionAppsFusionEnvironmentServiceAttachments` Submodule <a name="`dataOciFusionAppsFusionEnvironmentServiceAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentServiceAttachments <a name="DataOciFusionAppsFusionEnvironmentServiceAttachments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments oci_fusion_apps_fusion_environment_service_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]] = None,
  id: str = None,
  service_instance_type: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachments#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#display_name DataOciFusionAppsFusionEnvironmentServiceAttachments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#id DataOciFusionAppsFusionEnvironmentServiceAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#service_instance_type DataOciFusionAppsFusionEnvironmentServiceAttachments#service_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#state DataOciFusionAppsFusionEnvironmentServiceAttachments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachments#fusion_environment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#display_name DataOciFusionAppsFusionEnvironmentServiceAttachments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#filter DataOciFusionAppsFusionEnvironmentServiceAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#id DataOciFusionAppsFusionEnvironmentServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_instance_type`<sup>Optional</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.serviceInstanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#service_instance_type DataOciFusionAppsFusionEnvironmentServiceAttachments#service_instance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#state DataOciFusionAppsFusionEnvironmentServiceAttachments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetServiceInstanceType">reset_service_instance_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_service_instance_type` <a name="reset_service_instance_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetServiceInstanceType"></a>

```python
def reset_service_instance_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentServiceAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentServiceAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentServiceAttachments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentServiceAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentServiceAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.serviceAttachmentCollection">service_attachment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.serviceInstanceTypeInput">service_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.filter"></a>

```python
filter: DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList</a>

---

##### `service_attachment_collection`<sup>Required</sup> <a name="service_attachment_collection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.serviceAttachmentCollection"></a>

```python
service_attachment_collection: DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_instance_type_input`<sup>Optional</sup> <a name="service_instance_type_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.serviceInstanceTypeInput"></a>

```python
service_instance_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_instance_type`<sup>Required</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.serviceInstanceType"></a>

```python
service_instance_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]] = None,
  id: str = None,
  service_instance_type: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachments#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#display_name DataOciFusionAppsFusionEnvironmentServiceAttachments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#id DataOciFusionAppsFusionEnvironmentServiceAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#service_instance_type DataOciFusionAppsFusionEnvironmentServiceAttachments#service_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#state DataOciFusionAppsFusionEnvironmentServiceAttachments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachments#fusion_environment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#display_name DataOciFusionAppsFusionEnvironmentServiceAttachments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#filter DataOciFusionAppsFusionEnvironmentServiceAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#id DataOciFusionAppsFusionEnvironmentServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `service_instance_type`<sup>Optional</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.serviceInstanceType"></a>

```python
service_instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#service_instance_type DataOciFusionAppsFusionEnvironmentServiceAttachments#service_instance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#state DataOciFusionAppsFusionEnvironmentServiceAttachments#state}.

---

### DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#name DataOciFusionAppsFusionEnvironmentServiceAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#values DataOciFusionAppsFusionEnvironmentServiceAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#regex DataOciFusionAppsFusionEnvironmentServiceAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#name DataOciFusionAppsFusionEnvironmentServiceAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#values DataOciFusionAppsFusionEnvironmentServiceAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachments#regex DataOciFusionAppsFusionEnvironmentServiceAttachments#regex}.

---

### DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection()
```


### DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]]

---


### DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter">DataOciFusionAppsFusionEnvironmentServiceAttachmentsFilter</a>]

---


### DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.isSkuBased">is_sku_based</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.serviceInstanceType">service_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.serviceUrl">service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_sku_based`<sup>Required</sup> <a name="is_sku_based" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.isSkuBased"></a>

```python
is_sku_based: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

##### `service_instance_type`<sup>Required</sup> <a name="service_instance_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.serviceInstanceType"></a>

```python
service_instance_type: str
```

- *Type:* str

---

##### `service_url`<sup>Required</sup> <a name="service_url" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_service_attachments

dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.items"></a>

```python
items: DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachments.DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection">DataOciFusionAppsFusionEnvironmentServiceAttachmentsServiceAttachmentCollection</a>

---



