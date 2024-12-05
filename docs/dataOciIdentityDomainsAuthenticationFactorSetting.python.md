# `dataOciIdentityDomainsAuthenticationFactorSetting` Submodule <a name="`dataOciIdentityDomainsAuthenticationFactorSetting` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAuthenticationFactorSetting <a name="DataOciIdentityDomainsAuthenticationFactorSetting" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authentication_factor_setting_id: str = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `authentication_factor_setting_id`<sup>Optional</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authenticationFactorSettingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthenticationFactorSettingId">reset_authentication_factor_setting_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authentication_factor_setting_id` <a name="reset_authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthenticationFactorSettingId"></a>

```python
def reset_authentication_factor_setting_id() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsAuthenticationFactorSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsAuthenticationFactorSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAuthenticationFactorSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled">auto_enroll_email_factor_disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled">bypass_code_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings">bypass_code_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.clientAppSettings">client_app_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compliancePolicy">compliance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailEnabled">email_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailSettings">email_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions">endpoint_restrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled">fido_authenticator_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled">hide_backup_factor_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings">identity_store_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList">DataOciIdentityDomainsAuthenticationFactorSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory">mfa_enabled_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType">mfa_enrollment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.notificationSettings">notification_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled">phone_call_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.pushEnabled">push_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled">security_questions_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.smsEnabled">sms_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList">DataOciIdentityDomainsAuthenticationFactorSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor">third_party_factor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpEnabled">totp_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpSettings">totp_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors">user_enrollment_disabled_factors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled">yubico_otp_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput">authentication_factor_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_enroll_email_factor_disabled`<sup>Required</sup> <a name="auto_enroll_email_factor_disabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled"></a>

```python
auto_enroll_email_factor_disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bypass_code_enabled`<sup>Required</sup> <a name="bypass_code_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled"></a>

```python
bypass_code_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bypass_code_settings`<sup>Required</sup> <a name="bypass_code_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings"></a>

```python
bypass_code_settings: DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList</a>

---

##### `client_app_settings`<sup>Required</sup> <a name="client_app_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.clientAppSettings"></a>

```python
client_app_settings: DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList</a>

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `compliance_policy`<sup>Required</sup> <a name="compliance_policy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compliancePolicy"></a>

```python
compliance_policy: DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `email_enabled`<sup>Required</sup> <a name="email_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailEnabled"></a>

```python
email_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `email_settings`<sup>Required</sup> <a name="email_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailSettings"></a>

```python
email_settings: DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList</a>

---

##### `endpoint_restrictions`<sup>Required</sup> <a name="endpoint_restrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions"></a>

```python
endpoint_restrictions: DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList</a>

---

##### `fido_authenticator_enabled`<sup>Required</sup> <a name="fido_authenticator_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled"></a>

```python
fido_authenticator_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hide_backup_factor_enabled`<sup>Required</sup> <a name="hide_backup_factor_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled"></a>

```python
hide_backup_factor_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_store_settings`<sup>Required</sup> <a name="identity_store_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings"></a>

```python
identity_store_settings: DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.meta"></a>

```python
meta: DataOciIdentityDomainsAuthenticationFactorSettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList">DataOciIdentityDomainsAuthenticationFactorSettingMetaList</a>

---

##### `mfa_enabled_category`<sup>Required</sup> <a name="mfa_enabled_category" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory"></a>

```python
mfa_enabled_category: str
```

- *Type:* str

---

##### `mfa_enrollment_type`<sup>Required</sup> <a name="mfa_enrollment_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType"></a>

```python
mfa_enrollment_type: str
```

- *Type:* str

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.notificationSettings"></a>

```python
notification_settings: DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `phone_call_enabled`<sup>Required</sup> <a name="phone_call_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled"></a>

```python
phone_call_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `push_enabled`<sup>Required</sup> <a name="push_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.pushEnabled"></a>

```python
push_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_questions_enabled`<sup>Required</sup> <a name="security_questions_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled"></a>

```python
security_questions_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sms_enabled`<sup>Required</sup> <a name="sms_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.smsEnabled"></a>

```python
sms_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tags"></a>

```python
tags: DataOciIdentityDomainsAuthenticationFactorSettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList">DataOciIdentityDomainsAuthenticationFactorSettingTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `third_party_factor`<sup>Required</sup> <a name="third_party_factor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor"></a>

```python
third_party_factor: DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList</a>

---

##### `totp_enabled`<sup>Required</sup> <a name="totp_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpEnabled"></a>

```python
totp_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `totp_settings`<sup>Required</sup> <a name="totp_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpSettings"></a>

```python
totp_settings: DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```python
urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a>

---

##### `user_enrollment_disabled_factors`<sup>Required</sup> <a name="user_enrollment_disabled_factors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors"></a>

```python
user_enrollment_disabled_factors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `yubico_otp_enabled`<sup>Required</sup> <a name="yubico_otp_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled"></a>

```python
yubico_otp_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authentication_factor_setting_id_input`<sup>Optional</sup> <a name="authentication_factor_setting_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput"></a>

```python
authentication_factor_setting_id_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_factor_setting_id`<sup>Required</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId"></a>

```python
authentication_factor_setting_id: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy <a name="DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy()
```


### DataOciIdentityDomainsAuthenticationFactorSettingConfig <a name="DataOciIdentityDomainsAuthenticationFactorSettingConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authentication_factor_setting_id: str = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId">authentication_factor_setting_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `authentication_factor_setting_id`<sup>Optional</sup> <a name="authentication_factor_setting_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId"></a>

```python
authentication_factor_setting_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

### DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions <a name="DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions()
```


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy()
```


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy()
```


### DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingMeta <a name="DataOciIdentityDomainsAuthenticationFactorSettingMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta()
```


### DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingTags <a name="DataOciIdentityDomainsAuthenticationFactorSettingTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags()
```


### DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor <a name="DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor()
```


### DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings()
```


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">help_desk_code_expiry_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">help_desk_generation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">help_desk_max_usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive">max_active</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">self_service_generation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `help_desk_code_expiry_in_mins`<sup>Required</sup> <a name="help_desk_code_expiry_in_mins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```python
help_desk_code_expiry_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `help_desk_generation_enabled`<sup>Required</sup> <a name="help_desk_generation_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```python
help_desk_generation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `help_desk_max_usage`<sup>Required</sup> <a name="help_desk_max_usage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```python
help_desk_max_usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_active`<sup>Required</sup> <a name="max_active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive"></a>

```python
max_active: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_service_generation_enabled`<sup>Required</sup> <a name="self_service_generation_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```python
self_service_generation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy">device_protection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">initial_lockout_period_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength">key_pair_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern">lockout_escalation_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">max_failures_before_lockout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">max_failures_before_warning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">max_lockout_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength">min_pin_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays">policy_update_freq_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo">request_signing_algo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding">shared_secret_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">unlock_app_for_each_request_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">unlock_app_interval_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">unlock_on_app_foreground_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">unlock_on_app_start_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_protection_policy`<sup>Required</sup> <a name="device_protection_policy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```python
device_protection_policy: str
```

- *Type:* str

---

##### `initial_lockout_period_in_secs`<sup>Required</sup> <a name="initial_lockout_period_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```python
initial_lockout_period_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_pair_length`<sup>Required</sup> <a name="key_pair_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength"></a>

```python
key_pair_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lockout_escalation_pattern`<sup>Required</sup> <a name="lockout_escalation_pattern" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```python
lockout_escalation_pattern: str
```

- *Type:* str

---

##### `max_failures_before_lockout`<sup>Required</sup> <a name="max_failures_before_lockout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```python
max_failures_before_lockout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_before_warning`<sup>Required</sup> <a name="max_failures_before_warning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```python
max_failures_before_warning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_lockout_interval_in_secs`<sup>Required</sup> <a name="max_lockout_interval_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```python
max_lockout_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pin_length`<sup>Required</sup> <a name="min_pin_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength"></a>

```python
min_pin_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_update_freq_in_days`<sup>Required</sup> <a name="policy_update_freq_in_days" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```python
policy_update_freq_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_signing_algo`<sup>Required</sup> <a name="request_signing_algo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```python
request_signing_algo: str
```

- *Type:* str

---

##### `shared_secret_encoding`<sup>Required</sup> <a name="shared_secret_encoding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```python
shared_secret_encoding: str
```

- *Type:* str

---

##### `unlock_app_for_each_request_enabled`<sup>Required</sup> <a name="unlock_app_for_each_request_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```python
unlock_app_for_each_request_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unlock_app_interval_in_secs`<sup>Required</sup> <a name="unlock_app_interval_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```python
unlock_app_interval_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unlock_on_app_foreground_enabled`<sup>Required</sup> <a name="unlock_on_app_foreground_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```python
unlock_on_app_foreground_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unlock_on_app_start_enabled`<sup>Required</sup> <a name="unlock_on_app_start_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```python
unlock_on_app_start_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList <a name="DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl">email_link_custom_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled">email_link_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_link_custom_url`<sup>Required</sup> <a name="email_link_custom_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```python
email_link_custom_url: str
```

- *Type:* str

---

##### `email_link_enabled`<sup>Required</sup> <a name="email_link_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```python
email_link_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">max_endpoint_trust_duration_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices">max_enrolled_devices</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">max_incorrect_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">max_trusted_endpoints</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">trusted_endpoints_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_endpoint_trust_duration_in_days`<sup>Required</sup> <a name="max_endpoint_trust_duration_in_days" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```python
max_endpoint_trust_duration_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_enrolled_devices`<sup>Required</sup> <a name="max_enrolled_devices" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```python
max_enrolled_devices: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_incorrect_attempts`<sup>Required</sup> <a name="max_incorrect_attempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```python
max_incorrect_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_trusted_endpoints`<sup>Required</sup> <a name="max_trusted_endpoints" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```python
max_trusted_endpoints: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_endpoints_enabled`<sup>Required</sup> <a name="trusted_endpoints_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```python
trusted_endpoints_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">mobile_number_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">mobile_number_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mobile_number_enabled`<sup>Required</sup> <a name="mobile_number_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```python
mobile_number_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mobile_number_update_enabled`<sup>Required</sup> <a name="mobile_number_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```python
mobile_number_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingMetaList <a name="DataOciIdentityDomainsAuthenticationFactorSettingMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta">DataOciIdentityDomainsAuthenticationFactorSettingMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta">DataOciIdentityDomainsAuthenticationFactorSettingMeta</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled">pull_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pull_enabled`<sup>Required</sup> <a name="pull_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled"></a>

```python
pull_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingTagsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags">DataOciIdentityDomainsAuthenticationFactorSettingTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags">DataOciIdentityDomainsAuthenticationFactorSettingTags</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList <a name="DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity">duo_security</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duo_security`<sup>Required</sup> <a name="duo_security" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity"></a>

```python
duo_security: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">email_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength">email_passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm">hashing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs">jwt_validity_duration_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays">key_refresh_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength">passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">sms_otp_validity_duration_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength">sms_passcode_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs">time_step_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance">time_step_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_otp_validity_duration_in_mins`<sup>Required</sup> <a name="email_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```python
email_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_passcode_length`<sup>Required</sup> <a name="email_passcode_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```python
email_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hashing_algorithm`<sup>Required</sup> <a name="hashing_algorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```python
hashing_algorithm: str
```

- *Type:* str

---

##### `jwt_validity_duration_in_secs`<sup>Required</sup> <a name="jwt_validity_duration_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```python
jwt_validity_duration_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_refresh_interval_in_days`<sup>Required</sup> <a name="key_refresh_interval_in_days" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```python
key_refresh_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `passcode_length`<sup>Required</sup> <a name="passcode_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength"></a>

```python
passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_otp_validity_duration_in_mins`<sup>Required</sup> <a name="sms_otp_validity_duration_in_mins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```python
sms_otp_validity_duration_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sms_passcode_length`<sup>Required</sup> <a name="sms_passcode_length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```python
sms_passcode_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_in_secs`<sup>Required</sup> <a name="time_step_in_secs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs"></a>

```python
time_step_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_step_tolerance`<sup>Required</sup> <a name="time_step_tolerance" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance"></a>

```python
time_step_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">attestation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">authenticator_selection_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">authenticator_selection_require_resident_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">authenticator_selection_resident_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">authenticator_selection_user_verification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">domain_validation_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">exclude_credentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">public_key_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```python
attestation: str
```

- *Type:* str

---

##### `authenticator_selection_attachment`<sup>Required</sup> <a name="authenticator_selection_attachment" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```python
authenticator_selection_attachment: str
```

- *Type:* str

---

##### `authenticator_selection_require_resident_key`<sup>Required</sup> <a name="authenticator_selection_require_resident_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```python
authenticator_selection_require_resident_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `authenticator_selection_resident_key`<sup>Required</sup> <a name="authenticator_selection_resident_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```python
authenticator_selection_resident_key: str
```

- *Type:* str

---

##### `authenticator_selection_user_verification`<sup>Required</sup> <a name="authenticator_selection_user_verification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```python
authenticator_selection_user_verification: str
```

- *Type:* str

---

##### `domain_validation_level`<sup>Required</sup> <a name="domain_validation_level" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```python
domain_validation_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_credentials`<sup>Required</sup> <a name="exclude_credentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```python
exclude_credentials: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `public_key_types`<sup>Required</sup> <a name="public_key_types" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```python
public_key_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">api_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">attestation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">user_mapping_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_hostname`<sup>Required</sup> <a name="api_hostname" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```python
api_hostname: str
```

- *Type:* str

---

##### `attestation_key`<sup>Required</sup> <a name="attestation_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```python
attestation_key: str
```

- *Type:* str

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `user_mapping_attribute`<sup>Required</sup> <a name="user_mapping_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```python
user_mapping_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_authentication_factor_setting

dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">duo_security_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duo_security_settings`<sup>Required</sup> <a name="duo_security_settings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```python
duo_security_settings: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



