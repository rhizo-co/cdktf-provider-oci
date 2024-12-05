# `dataOciIdentityDomainsIdentityProvider` Submodule <a name="`dataOciIdentityDomainsIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityProvider <a name="DataOciIdentityDomainsIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider oci_identity_domains_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider(
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
  identity_provider_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.identityProviderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsIdentityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.assertionAttribute">assertion_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authnRequestBinding">authn_request_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.correlationPolicy">correlation_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList">DataOciIdentityDomainsIdentityProviderCorrelationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.encryptionCertificate">encryption_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.iconUrl">icon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.includeSigningCertInSignature">include_signing_cert_in_signature</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups">jit_user_prov_assigned_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributes">jit_user_prov_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList">DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled">jit_user_prov_attribute_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled">jit_user_prov_create_user_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvEnabled">jit_user_prov_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled">jit_user_prov_group_assertion_attribute_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod">jit_user_prov_group_assignment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode">jit_user_prov_group_mapping_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappings">jit_user_prov_group_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName">jit_user_prov_group_saml_attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled">jit_user_prov_group_static_list_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups">jit_user_prov_ignore_error_on_absent_groups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lastNotificationSentTime">last_notification_sent_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutBinding">logout_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutEnabled">logout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutRequestUrl">logout_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutResponseUrl">logout_response_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList">DataOciIdentityDomainsIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.nameIdFormat">name_id_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerName">partner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerProviderId">partner_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requestedAuthenticationContext">requested_authentication_context</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requireForceAuthn">require_force_authn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requiresEncryptedAssertion">requires_encrypted_assertion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.samlHoKrequired">saml_ho_krequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.serviceInstanceIdentifier">service_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.shownOnLoginPage">shown_on_login_page</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signatureHashAlgorithm">signature_hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signingCertificate">signing_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.succinctId">succinct_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList">DataOciIdentityDomainsIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenantProviderId">tenant_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509_identity_provider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingMethod">user_mapping_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingStoreAttribute">user_mapping_store_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `assertion_attribute`<sup>Required</sup> <a name="assertion_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.assertionAttribute"></a>

```python
assertion_attribute: str
```

- *Type:* str

---

##### `authn_request_binding`<sup>Required</sup> <a name="authn_request_binding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authnRequestBinding"></a>

```python
authn_request_binding: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `correlation_policy`<sup>Required</sup> <a name="correlation_policy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.correlationPolicy"></a>

```python
correlation_policy: DataOciIdentityDomainsIdentityProviderCorrelationPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList">DataOciIdentityDomainsIdentityProviderCorrelationPolicyList</a>

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption_certificate`<sup>Required</sup> <a name="encryption_certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.encryptionCertificate"></a>

```python
encryption_certificate: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `icon_url`<sup>Required</sup> <a name="icon_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.iconUrl"></a>

```python
icon_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsIdentityProviderIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsIdentityProviderIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `idp_sso_url`<sup>Required</sup> <a name="idp_sso_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idpSsoUrl"></a>

```python
idp_sso_url: str
```

- *Type:* str

---

##### `include_signing_cert_in_signature`<sup>Required</sup> <a name="include_signing_cert_in_signature" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.includeSigningCertInSignature"></a>

```python
include_signing_cert_in_signature: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jit_user_prov_assigned_groups`<sup>Required</sup> <a name="jit_user_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups"></a>

```python
jit_user_prov_assigned_groups: DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a>

---

##### `jit_user_prov_attributes`<sup>Required</sup> <a name="jit_user_prov_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributes"></a>

```python
jit_user_prov_attributes: DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList">DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList</a>

---

##### `jit_user_prov_attribute_update_enabled`<sup>Required</sup> <a name="jit_user_prov_attribute_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled"></a>

```python
jit_user_prov_attribute_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jit_user_prov_create_user_enabled`<sup>Required</sup> <a name="jit_user_prov_create_user_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled"></a>

```python
jit_user_prov_create_user_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jit_user_prov_enabled`<sup>Required</sup> <a name="jit_user_prov_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvEnabled"></a>

```python
jit_user_prov_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jit_user_prov_group_assertion_attribute_enabled`<sup>Required</sup> <a name="jit_user_prov_group_assertion_attribute_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```python
jit_user_prov_group_assertion_attribute_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jit_user_prov_group_assignment_method`<sup>Required</sup> <a name="jit_user_prov_group_assignment_method" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod"></a>

```python
jit_user_prov_group_assignment_method: str
```

- *Type:* str

---

##### `jit_user_prov_group_mapping_mode`<sup>Required</sup> <a name="jit_user_prov_group_mapping_mode" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode"></a>

```python
jit_user_prov_group_mapping_mode: str
```

- *Type:* str

---

##### `jit_user_prov_group_mappings`<sup>Required</sup> <a name="jit_user_prov_group_mappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappings"></a>

```python
jit_user_prov_group_mappings: DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a>

---

##### `jit_user_prov_group_saml_attribute_name`<sup>Required</sup> <a name="jit_user_prov_group_saml_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName"></a>

```python
jit_user_prov_group_saml_attribute_name: str
```

- *Type:* str

---

##### `jit_user_prov_group_static_list_enabled`<sup>Required</sup> <a name="jit_user_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled"></a>

```python
jit_user_prov_group_static_list_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jit_user_prov_ignore_error_on_absent_groups`<sup>Required</sup> <a name="jit_user_prov_ignore_error_on_absent_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```python
jit_user_prov_ignore_error_on_absent_groups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_notification_sent_time`<sup>Required</sup> <a name="last_notification_sent_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lastNotificationSentTime"></a>

```python
last_notification_sent_time: str
```

- *Type:* str

---

##### `logout_binding`<sup>Required</sup> <a name="logout_binding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutBinding"></a>

```python
logout_binding: str
```

- *Type:* str

---

##### `logout_enabled`<sup>Required</sup> <a name="logout_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutEnabled"></a>

```python
logout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `logout_request_url`<sup>Required</sup> <a name="logout_request_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutRequestUrl"></a>

```python
logout_request_url: str
```

- *Type:* str

---

##### `logout_response_url`<sup>Required</sup> <a name="logout_response_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutResponseUrl"></a>

```python
logout_response_url: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.meta"></a>

```python
meta: DataOciIdentityDomainsIdentityProviderMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList">DataOciIdentityDomainsIdentityProviderMetaList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name_id_format`<sup>Required</sup> <a name="name_id_format" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.nameIdFormat"></a>

```python
name_id_format: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `partner_name`<sup>Required</sup> <a name="partner_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerName"></a>

```python
partner_name: str
```

- *Type:* str

---

##### `partner_provider_id`<sup>Required</sup> <a name="partner_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerProviderId"></a>

```python
partner_provider_id: str
```

- *Type:* str

---

##### `requested_authentication_context`<sup>Required</sup> <a name="requested_authentication_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requestedAuthenticationContext"></a>

```python
requested_authentication_context: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_force_authn`<sup>Required</sup> <a name="require_force_authn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requireForceAuthn"></a>

```python
require_force_authn: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `requires_encrypted_assertion`<sup>Required</sup> <a name="requires_encrypted_assertion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requiresEncryptedAssertion"></a>

```python
requires_encrypted_assertion: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `saml_ho_krequired`<sup>Required</sup> <a name="saml_ho_krequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.samlHoKrequired"></a>

```python
saml_ho_krequired: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_instance_identifier`<sup>Required</sup> <a name="service_instance_identifier" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.serviceInstanceIdentifier"></a>

```python
service_instance_identifier: str
```

- *Type:* str

---

##### `shown_on_login_page`<sup>Required</sup> <a name="shown_on_login_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.shownOnLoginPage"></a>

```python
shown_on_login_page: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `signature_hash_algorithm`<sup>Required</sup> <a name="signature_hash_algorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signatureHashAlgorithm"></a>

```python
signature_hash_algorithm: str
```

- *Type:* str

---

##### `signing_certificate`<sup>Required</sup> <a name="signing_certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signingCertificate"></a>

```python
signing_certificate: str
```

- *Type:* str

---

##### `succinct_id`<sup>Required</sup> <a name="succinct_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.succinctId"></a>

```python
succinct_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tags"></a>

```python
tags: DataOciIdentityDomainsIdentityProviderTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList">DataOciIdentityDomainsIdentityProviderTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `tenant_provider_id`<sup>Required</sup> <a name="tenant_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenantProviderId"></a>

```python
tenant_provider_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```python
urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionx509_identity_provider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509_identity_provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```python
urnietfparamsscimschemasoracleidcsextensionx509_identity_provider: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a>

---

##### `user_mapping_method`<sup>Required</sup> <a name="user_mapping_method" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingMethod"></a>

```python
user_mapping_method: str
```

- *Type:* str

---

##### `user_mapping_store_attribute`<sup>Required</sup> <a name="user_mapping_store_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingStoreAttribute"></a>

```python
user_mapping_store_attribute: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityProviderConfig <a name="DataOciIdentityDomainsIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  identity_provider_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}.

---

### DataOciIdentityDomainsIdentityProviderCorrelationPolicy <a name="DataOciIdentityDomainsIdentityProviderCorrelationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy()
```


### DataOciIdentityDomainsIdentityProviderIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy()
```


### DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy()
```


### DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups()
```


### DataOciIdentityDomainsIdentityProviderJitUserProvAttributes <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes()
```


### DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings <a name="DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings()
```


### DataOciIdentityDomainsIdentityProviderMeta <a name="DataOciIdentityDomainsIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta()
```


### DataOciIdentityDomainsIdentityProviderTags <a name="DataOciIdentityDomainsIdentityProviderTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags()
```


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider()
```


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups()
```


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityProviderCorrelationPolicyList <a name="DataOciIdentityDomainsIdentityProviderCorrelationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference <a name="DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy">DataOciIdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderCorrelationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy">DataOciIdentityDomainsIdentityProviderCorrelationPolicy</a>

---


### DataOciIdentityDomainsIdentityProviderIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsIdentityProviderIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes">DataOciIdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderJitUserProvAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes">DataOciIdentityDomainsIdentityProviderJitUserProvAttributes</a>

---


### DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList <a name="DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference <a name="DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup">idp_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp_group`<sup>Required</sup> <a name="idp_group" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```python
idp_group: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings</a>

---


### DataOciIdentityDomainsIdentityProviderMetaList <a name="DataOciIdentityDomainsIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderMetaOutputReference <a name="DataOciIdentityDomainsIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta">DataOciIdentityDomainsIdentityProviderMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta">DataOciIdentityDomainsIdentityProviderMeta</a>

---


### DataOciIdentityDomainsIdentityProviderTagsList <a name="DataOciIdentityDomainsIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderTagsOutputReference <a name="DataOciIdentityDomainsIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags">DataOciIdentityDomainsIdentityProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags">DataOciIdentityDomainsIdentityProviderTags</a>

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">account_linking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">admin_scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">authz_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">auto_redirect_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">client_credential_in_payload</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">clock_skew_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">id_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">jit_prov_assigned_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">jit_prov_group_static_list_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">registration_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">social_jit_provisioning_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

---

##### `account_linking_enabled`<sup>Required</sup> <a name="account_linking_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```python
account_linking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `admin_scope`<sup>Required</sup> <a name="admin_scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```python
admin_scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authz_url`<sup>Required</sup> <a name="authz_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```python
authz_url: str
```

- *Type:* str

---

##### `auto_redirect_enabled`<sup>Required</sup> <a name="auto_redirect_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```python
auto_redirect_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_credential_in_payload`<sup>Required</sup> <a name="client_credential_in_payload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```python
client_credential_in_payload: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `clock_skew_in_seconds`<sup>Required</sup> <a name="clock_skew_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```python
clock_skew_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `id_attribute`<sup>Required</sup> <a name="id_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```python
id_attribute: str
```

- *Type:* str

---

##### `jit_prov_assigned_groups`<sup>Required</sup> <a name="jit_prov_assigned_groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```python
jit_prov_assigned_groups: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `jit_prov_group_static_list_enabled`<sup>Required</sup> <a name="jit_prov_group_static_list_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```python
jit_prov_group_static_list_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```python
registration_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

---

##### `social_jit_provisioning_enabled`<sup>Required</sup> <a name="social_jit_provisioning_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```python
social_jit_provisioning_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_provider

dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">cert_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">crl_check_on_ocsp_failure_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">crl_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">crl_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">crl_reload_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">eku_validation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">eku_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">ocsp_allow_unknown_response_status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">ocsp_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">ocsp_enable_signed_response</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">ocsp_responder_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">ocsp_revalidate_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">ocsp_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">ocsp_trust_cert_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">other_cert_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">signing_certificate_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">user_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_match_attribute`<sup>Required</sup> <a name="cert_match_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```python
cert_match_attribute: str
```

- *Type:* str

---

##### `crl_check_on_ocsp_failure_enabled`<sup>Required</sup> <a name="crl_check_on_ocsp_failure_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```python
crl_check_on_ocsp_failure_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `crl_enabled`<sup>Required</sup> <a name="crl_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```python
crl_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `crl_location`<sup>Required</sup> <a name="crl_location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```python
crl_location: str
```

- *Type:* str

---

##### `crl_reload_duration`<sup>Required</sup> <a name="crl_reload_duration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```python
crl_reload_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eku_validation_enabled`<sup>Required</sup> <a name="eku_validation_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```python
eku_validation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `eku_values`<sup>Required</sup> <a name="eku_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```python
eku_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocsp_allow_unknown_response_status`<sup>Required</sup> <a name="ocsp_allow_unknown_response_status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```python
ocsp_allow_unknown_response_status: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ocsp_enabled`<sup>Required</sup> <a name="ocsp_enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```python
ocsp_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ocsp_enable_signed_response`<sup>Required</sup> <a name="ocsp_enable_signed_response" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```python
ocsp_enable_signed_response: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ocsp_responder_url`<sup>Required</sup> <a name="ocsp_responder_url" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```python
ocsp_responder_url: str
```

- *Type:* str

---

##### `ocsp_revalidate_time`<sup>Required</sup> <a name="ocsp_revalidate_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```python
ocsp_revalidate_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocsp_server_name`<sup>Required</sup> <a name="ocsp_server_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```python
ocsp_server_name: str
```

- *Type:* str

---

##### `ocsp_trust_cert_chain`<sup>Required</sup> <a name="ocsp_trust_cert_chain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```python
ocsp_trust_cert_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `other_cert_match_attribute`<sup>Required</sup> <a name="other_cert_match_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```python
other_cert_match_attribute: str
```

- *Type:* str

---

##### `signing_certificate_chain`<sup>Required</sup> <a name="signing_certificate_chain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```python
signing_certificate_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_match_attribute`<sup>Required</sup> <a name="user_match_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```python
user_match_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



