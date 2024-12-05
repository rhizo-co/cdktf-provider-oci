# `dataOciIdentityDomainsSocialIdentityProvider` Submodule <a name="`dataOciIdentityDomainsSocialIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSocialIdentityProvider <a name="DataOciIdentityDomainsSocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider oci_identity_domains_social_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider(
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
  social_identity_provider_id: str,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#idcs_endpoint DataOciIdentityDomainsSocialIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.socialIdentityProviderId">social_identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#social_identity_provider_id DataOciIdentityDomainsSocialIdentityProvider#social_identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#authorization DataOciIdentityDomainsSocialIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProvider#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#idcs_endpoint DataOciIdentityDomainsSocialIdentityProvider#idcs_endpoint}.

---

##### `social_identity_provider_id`<sup>Required</sup> <a name="social_identity_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.socialIdentityProviderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#social_identity_provider_id DataOciIdentityDomainsSocialIdentityProvider#social_identity_provider_id}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#authorization DataOciIdentityDomainsSocialIdentityProvider#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProvider#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsSocialIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled">account_linking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.adminScope">admin_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authzUrl">authz_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled">auto_redirect_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload">client_credential_in_payload</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds">clock_skew_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idAttribute">id_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups">jit_prov_assigned_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled">jit_prov_group_static_list_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList">DataOciIdentityDomainsSocialIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.refreshTokenUrl">refresh_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.registrationEnabled">registration_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings">relay_idp_param_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.showOnLogin">show_on_login</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled">social_jit_provisioning_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList">DataOciIdentityDomainsSocialIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderIdInput">social_identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderId">social_identity_provider_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

---

##### `account_linking_enabled`<sup>Required</sup> <a name="account_linking_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled"></a>

```python
account_linking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `admin_scope`<sup>Required</sup> <a name="admin_scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.adminScope"></a>

```python
admin_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authz_url`<sup>Required</sup> <a name="authz_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authzUrl"></a>

```python
authz_url: str
```

- *Type:* str

---

##### `auto_redirect_enabled`<sup>Required</sup> <a name="auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled"></a>

```python
auto_redirect_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_credential_in_payload`<sup>Required</sup> <a name="client_credential_in_payload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload"></a>

```python
client_credential_in_payload: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `clock_skew_in_seconds`<sup>Required</sup> <a name="clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds"></a>

```python
clock_skew_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_attribute`<sup>Required</sup> <a name="id_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idAttribute"></a>

```python
id_attribute: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `jit_prov_assigned_groups`<sup>Required</sup> <a name="jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups"></a>

```python
jit_prov_assigned_groups: DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `jit_prov_group_static_list_enabled`<sup>Required</sup> <a name="jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```python
jit_prov_group_static_list_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.meta"></a>

```python
meta: DataOciIdentityDomainsSocialIdentityProviderMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList">DataOciIdentityDomainsSocialIdentityProviderMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `refresh_token_url`<sup>Required</sup> <a name="refresh_token_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.refreshTokenUrl"></a>

```python
refresh_token_url: str
```

- *Type:* str

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.registrationEnabled"></a>

```python
registration_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `relay_idp_param_mappings`<sup>Required</sup> <a name="relay_idp_param_mappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings"></a>

```python
relay_idp_param_mappings: DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

---

##### `show_on_login`<sup>Required</sup> <a name="show_on_login" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.showOnLogin"></a>

```python
show_on_login: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `social_jit_provisioning_enabled`<sup>Required</sup> <a name="social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```python
social_jit_provisioning_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tags"></a>

```python
tags: DataOciIdentityDomainsSocialIdentityProviderTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList">DataOciIdentityDomainsSocialIdentityProviderTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `social_identity_provider_id_input`<sup>Optional</sup> <a name="social_identity_provider_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderIdInput"></a>

```python
social_identity_provider_id_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `social_identity_provider_id`<sup>Required</sup> <a name="social_identity_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderId"></a>

```python
social_identity_provider_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSocialIdentityProviderConfig <a name="DataOciIdentityDomainsSocialIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  social_identity_provider_id: str,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#idcs_endpoint DataOciIdentityDomainsSocialIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.socialIdentityProviderId">social_identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#social_identity_provider_id DataOciIdentityDomainsSocialIdentityProvider#social_identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#authorization DataOciIdentityDomainsSocialIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProvider#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#idcs_endpoint DataOciIdentityDomainsSocialIdentityProvider#idcs_endpoint}.

---

##### `social_identity_provider_id`<sup>Required</sup> <a name="social_identity_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.socialIdentityProviderId"></a>

```python
social_identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#social_identity_provider_id DataOciIdentityDomainsSocialIdentityProvider#social_identity_provider_id}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#authorization DataOciIdentityDomainsSocialIdentityProvider#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProvider#resource_type_schema_version}.

---

### DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy()
```


### DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy()
```


### DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups <a name="DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups()
```


### DataOciIdentityDomainsSocialIdentityProviderMeta <a name="DataOciIdentityDomainsSocialIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta()
```


### DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings <a name="DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings()
```


### DataOciIdentityDomainsSocialIdentityProviderTags <a name="DataOciIdentityDomainsSocialIdentityProviderTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList <a name="DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsSocialIdentityProviderMetaList <a name="DataOciIdentityDomainsSocialIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta">DataOciIdentityDomainsSocialIdentityProviderMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProviderMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta">DataOciIdentityDomainsSocialIdentityProviderMeta</a>

---


### DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList <a name="DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey">relay_param_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue">relay_param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relay_param_key`<sup>Required</sup> <a name="relay_param_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```python
relay_param_key: str
```

- *Type:* str

---

##### `relay_param_value`<sup>Required</sup> <a name="relay_param_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```python
relay_param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>

---


### DataOciIdentityDomainsSocialIdentityProviderTagsList <a name="DataOciIdentityDomainsSocialIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_social_identity_provider

dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags">DataOciIdentityDomainsSocialIdentityProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsSocialIdentityProviderTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags">DataOciIdentityDomainsSocialIdentityProviderTags</a>

---



