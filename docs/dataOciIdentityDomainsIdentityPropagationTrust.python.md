# `dataOciIdentityDomainsIdentityPropagationTrust` Submodule <a name="`dataOciIdentityDomainsIdentityPropagationTrust` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityPropagationTrust <a name="DataOciIdentityDomainsIdentityPropagationTrust" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust oci_identity_domains_identity_propagation_trust}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust(
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
  identity_propagation_trust_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrust#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.identityPropagationTrustId">identity_propagation_trust_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#identity_propagation_trust_id DataOciIdentityDomainsIdentityPropagationTrust#identity_propagation_trust_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attributes DataOciIdentityDomainsIdentityPropagationTrust#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attribute_sets DataOciIdentityDomainsIdentityPropagationTrust#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#authorization DataOciIdentityDomainsIdentityPropagationTrust#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrust#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrust#idcs_endpoint}.

---

##### `identity_propagation_trust_id`<sup>Required</sup> <a name="identity_propagation_trust_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.identityPropagationTrustId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#identity_propagation_trust_id DataOciIdentityDomainsIdentityPropagationTrust#identity_propagation_trust_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attributes DataOciIdentityDomainsIdentityPropagationTrust#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attribute_sets DataOciIdentityDomainsIdentityPropagationTrust#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#authorization DataOciIdentityDomainsIdentityPropagationTrust#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrust#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityPropagationTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsIdentityPropagationTrust to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsIdentityPropagationTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityPropagationTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.allowImpersonation">allow_impersonation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.clientClaimName">client_claim_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.clientClaimValues">client_claim_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds">clock_skew_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList">DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers">impersonation_service_users</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.keytab">keytab</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList">DataOciIdentityDomainsIdentityPropagationTrustKeytabList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList">DataOciIdentityDomainsIdentityPropagationTrustMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.oauthClients">oauth_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.publicCertificate">public_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint">public_key_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.subjectClaimName">subject_claim_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute">subject_mapping_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.subjectType">subject_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList">DataOciIdentityDomainsIdentityPropagationTrustTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.identityPropagationTrustIdInput">identity_propagation_trust_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.identityPropagationTrustId">identity_propagation_trust_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_impersonation`<sup>Required</sup> <a name="allow_impersonation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.allowImpersonation"></a>

```python
allow_impersonation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_claim_name`<sup>Required</sup> <a name="client_claim_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.clientClaimName"></a>

```python
client_claim_name: str
```

- *Type:* str

---

##### `client_claim_values`<sup>Required</sup> <a name="client_claim_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.clientClaimValues"></a>

```python
client_claim_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clock_skew_seconds`<sup>Required</sup> <a name="clock_skew_seconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.clockSkewSeconds"></a>

```python
clock_skew_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList">DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList</a>

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList">DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `impersonation_service_users`<sup>Required</sup> <a name="impersonation_service_users" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.impersonationServiceUsers"></a>

```python
impersonation_service_users: DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList">DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.keytab"></a>

```python
keytab: DataOciIdentityDomainsIdentityPropagationTrustKeytabList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList">DataOciIdentityDomainsIdentityPropagationTrustKeytabList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.meta"></a>

```python
meta: DataOciIdentityDomainsIdentityPropagationTrustMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList">DataOciIdentityDomainsIdentityPropagationTrustMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_clients`<sup>Required</sup> <a name="oauth_clients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.oauthClients"></a>

```python
oauth_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `public_certificate`<sup>Required</sup> <a name="public_certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.publicCertificate"></a>

```python
public_certificate: str
```

- *Type:* str

---

##### `public_key_endpoint`<sup>Required</sup> <a name="public_key_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.publicKeyEndpoint"></a>

```python
public_key_endpoint: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_claim_name`<sup>Required</sup> <a name="subject_claim_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.subjectClaimName"></a>

```python
subject_claim_name: str
```

- *Type:* str

---

##### `subject_mapping_attribute`<sup>Required</sup> <a name="subject_mapping_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.subjectMappingAttribute"></a>

```python
subject_mapping_attribute: str
```

- *Type:* str

---

##### `subject_type`<sup>Required</sup> <a name="subject_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.subjectType"></a>

```python
subject_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.tags"></a>

```python
tags: DataOciIdentityDomainsIdentityPropagationTrustTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList">DataOciIdentityDomainsIdentityPropagationTrustTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `identity_propagation_trust_id_input`<sup>Optional</sup> <a name="identity_propagation_trust_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.identityPropagationTrustIdInput"></a>

```python
identity_propagation_trust_id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `identity_propagation_trust_id`<sup>Required</sup> <a name="identity_propagation_trust_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.identityPropagationTrustId"></a>

```python
identity_propagation_trust_id: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrust.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityPropagationTrustConfig <a name="DataOciIdentityDomainsIdentityPropagationTrustConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  identity_propagation_trust_id: str,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  resource_type_schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrust#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.identityPropagationTrustId">identity_propagation_trust_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#identity_propagation_trust_id DataOciIdentityDomainsIdentityPropagationTrust#identity_propagation_trust_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attributes DataOciIdentityDomainsIdentityPropagationTrust#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attribute_sets DataOciIdentityDomainsIdentityPropagationTrust#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#authorization DataOciIdentityDomainsIdentityPropagationTrust#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrust#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#idcs_endpoint DataOciIdentityDomainsIdentityPropagationTrust#idcs_endpoint}.

---

##### `identity_propagation_trust_id`<sup>Required</sup> <a name="identity_propagation_trust_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.identityPropagationTrustId"></a>

```python
identity_propagation_trust_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#identity_propagation_trust_id DataOciIdentityDomainsIdentityPropagationTrust#identity_propagation_trust_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attributes DataOciIdentityDomainsIdentityPropagationTrust#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#attribute_sets DataOciIdentityDomainsIdentityPropagationTrust#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#authorization DataOciIdentityDomainsIdentityPropagationTrust#authorization}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_propagation_trust#resource_type_schema_version DataOciIdentityDomainsIdentityPropagationTrust#resource_type_schema_version}.

---

### DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy()
```


### DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy()
```


### DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers <a name="DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers()
```


### DataOciIdentityDomainsIdentityPropagationTrustKeytab <a name="DataOciIdentityDomainsIdentityPropagationTrustKeytab" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytab"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytab.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytab()
```


### DataOciIdentityDomainsIdentityPropagationTrustMeta <a name="DataOciIdentityDomainsIdentityPropagationTrustMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMeta()
```


### DataOciIdentityDomainsIdentityPropagationTrustTags <a name="DataOciIdentityDomainsIdentityPropagationTrustTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy">DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy">DataOciIdentityDomainsIdentityPropagationTrustIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy">DataOciIdentityDomainsIdentityPropagationTrustIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList <a name="DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers">DataOciIdentityDomainsIdentityPropagationTrustImpersonationServiceUsers</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustKeytabList <a name="DataOciIdentityDomainsIdentityPropagationTrustKeytabList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid">secret_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion">secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytab">DataOciIdentityDomainsIdentityPropagationTrustKeytab</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_ocid`<sup>Required</sup> <a name="secret_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretOcid"></a>

```python
secret_ocid: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.secretVersion"></a>

```python
secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytabOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityPropagationTrustKeytab
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustKeytab">DataOciIdentityDomainsIdentityPropagationTrustKeytab</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustMetaList <a name="DataOciIdentityDomainsIdentityPropagationTrustMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMeta">DataOciIdentityDomainsIdentityPropagationTrustMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityPropagationTrustMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustMeta">DataOciIdentityDomainsIdentityPropagationTrustMeta</a>

---


### DataOciIdentityDomainsIdentityPropagationTrustTagsList <a name="DataOciIdentityDomainsIdentityPropagationTrustTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference <a name="DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_identity_propagation_trust

dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTags">DataOciIdentityDomainsIdentityPropagationTrustTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsIdentityPropagationTrustTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityPropagationTrust.DataOciIdentityDomainsIdentityPropagationTrustTags">DataOciIdentityDomainsIdentityPropagationTrustTags</a>

---



