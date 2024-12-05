# `dataOciCertificatesManagementCertificates` Submodule <a name="`dataOciCertificatesManagementCertificates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificates <a name="DataOciCertificatesManagementCertificates" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates oci_certificates_management_certificates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificates(scope Construct, id *string, config DataOciCertificatesManagementCertificatesConfig) DataOciCertificatesManagementCertificates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig">DataOciCertificatesManagementCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig">DataOciCertificatesManagementCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetIssuerCertificateAuthorityId">ResetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetCertificateId"></a>

```go
func ResetCertificateId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerCertificateAuthorityId` <a name="ResetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetIssuerCertificateAuthorityId"></a>

```go
func ResetIssuerCertificateAuthorityId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCertificatesManagementCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCertificatesManagementCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.certificateCollection">CertificateCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList">DataOciCertificatesManagementCertificatesCertificateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList">DataOciCertificatesManagementCertificatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.certificateIdInput">CertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.issuerCertificateAuthorityIdInput">IssuerCertificateAuthorityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CertificateCollection`<sup>Required</sup> <a name="CertificateCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.certificateCollection"></a>

```go
func CertificateCollection() DataOciCertificatesManagementCertificatesCertificateCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList">DataOciCertificatesManagementCertificatesCertificateCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.filter"></a>

```go
func Filter() DataOciCertificatesManagementCertificatesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList">DataOciCertificatesManagementCertificatesFilterList</a>

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.certificateIdInput"></a>

```go
func CertificateIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="IssuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.issuerCertificateAuthorityIdInput"></a>

```go
func IssuerCertificateAuthorityIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.issuerCertificateAuthorityId"></a>

```go
func IssuerCertificateAuthorityId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificatesCertificateCollection <a name="DataOciCertificatesManagementCertificatesCertificateCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollection {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItems <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItems {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity {

}
```


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject {

}
```


### DataOciCertificatesManagementCertificatesConfig <a name="DataOciCertificatesManagementCertificatesConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateId: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	IssuerCertificateAuthorityId: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.certificateId">CertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#certificate_id DataOciCertificatesManagementCertificates#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#compartment_id DataOciCertificatesManagementCertificates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#id DataOciCertificatesManagementCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#issuer_certificate_authority_id DataOciCertificatesManagementCertificates#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#name DataOciCertificatesManagementCertificates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#state DataOciCertificatesManagementCertificates#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.certificateId"></a>

```go
CertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#certificate_id DataOciCertificatesManagementCertificates#certificate_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#compartment_id DataOciCertificatesManagementCertificates#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#filter DataOciCertificatesManagementCertificates#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#id DataOciCertificatesManagementCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerCertificateAuthorityId`<sup>Optional</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.issuerCertificateAuthorityId"></a>

```go
IssuerCertificateAuthorityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#issuer_certificate_authority_id DataOciCertificatesManagementCertificates#issuer_certificate_authority_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#name DataOciCertificatesManagementCertificates#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#state DataOciCertificatesManagementCertificates#state}.

---

### DataOciCertificatesManagementCertificatesFilter <a name="DataOciCertificatesManagementCertificatesFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

&dataocicertificatesmanagementcertificates.DataOciCertificatesManagementCertificatesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#name DataOciCertificatesManagementCertificates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#values DataOciCertificatesManagementCertificates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#regex DataOciCertificatesManagementCertificates#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#name DataOciCertificatesManagementCertificates#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#values DataOciCertificatesManagementCertificates#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificates#regex DataOciCertificatesManagementCertificates#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.certificateProfileType">CertificateProfileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.csrPem">CsrPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateProfileType`<sup>Required</sup> <a name="CertificateProfileType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.certificateProfileType"></a>

```go
func CertificateProfileType() *string
```

- *Type:* *string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `CsrPem`<sup>Required</sup> <a name="CsrPem" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.csrPem"></a>

```go
func CsrPem() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```go
func IssuerCertificateAuthorityId() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.subject"></a>

```go
func Subject() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList</a>

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.validity"></a>

```go
func Validity() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfig</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.street">Street</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```go
func DistinguishedNameQualifier() *string
```

- *Type:* *string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.domainComponent"></a>

```go
func DomainComponent() *string
```

- *Type:* *string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.generationQualifier"></a>

```go
func GenerationQualifier() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.localityName"></a>

```go
func LocalityName() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.pseudonym"></a>

```go
func Pseudonym() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```go
func StateOrProvinceName() *string
```

- *Type:* *string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.street"></a>

```go
func Street() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigSubject</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```go
func TimeOfValidityNotAfter() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```go
func TimeOfValidityNotBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigValidity</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">ObjectStorageBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">ObjectStorageObjectNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectStorageBucketName`<sup>Required</sup> <a name="ObjectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```go
func ObjectStorageBucketName() *string
```

- *Type:* *string

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```go
func ObjectStorageNamespace() *string
```

- *Type:* *string

---

##### `ObjectStorageObjectNameFormat`<sup>Required</sup> <a name="ObjectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```go
func ObjectStorageObjectNameFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">CustomFormattedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">ObjectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomFormattedUrls`<sup>Required</sup> <a name="CustomFormattedUrls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```go
func CustomFormattedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectStorageConfig`<sup>Required</sup> <a name="ObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```go
func ObjectStorageConfig() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.advanceRenewalPeriod">AdvanceRenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.renewalInterval">RenewalInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvanceRenewalPeriod`<sup>Required</sup> <a name="AdvanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.advanceRenewalPeriod"></a>

```go
func AdvanceRenewalPeriod() *string
```

- *Type:* *string

---

##### `RenewalInterval`<sup>Required</sup> <a name="RenewalInterval" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.renewalInterval"></a>

```go
func RenewalInterval() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRules</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.stages">Stages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```go
func IssuerCaVersionNumber() *string
```

- *Type:* *string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.revocationStatus"></a>

```go
func RevocationStatus() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.stages"></a>

```go
func Stages() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.validity"></a>

```go
func Validity() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.versionNumber"></a>

```go
func VersionNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersion</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```go
func RevocationReason() *string
```

- *Type:* *string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```go
func TimeOfRevocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```go
func TimeOfValidityNotAfter() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```go
func TimeOfValidityNotBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateConfig">CertificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateProfileType">CertificateProfileType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateRevocationListDetails">CertificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateRules">CertificateRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.currentVersion">CurrentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.issuerCertificateAuthorityId">IssuerCertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.subject">Subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItems">DataOciCertificatesManagementCertificatesCertificateCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateConfig`<sup>Required</sup> <a name="CertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateConfig"></a>

```go
func CertificateConfig() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateConfigList</a>

---

##### `CertificateProfileType`<sup>Required</sup> <a name="CertificateProfileType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateProfileType"></a>

```go
func CertificateProfileType() *string
```

- *Type:* *string

---

##### `CertificateRevocationListDetails`<sup>Required</sup> <a name="CertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateRevocationListDetails"></a>

```go
func CertificateRevocationListDetails() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRevocationListDetailsList</a>

---

##### `CertificateRules`<sup>Required</sup> <a name="CertificateRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.certificateRules"></a>

```go
func CertificateRules() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCertificateRulesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.currentVersion"></a>

```go
func CurrentVersion() DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsCurrentVersionList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthorityId`<sup>Required</sup> <a name="IssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.issuerCertificateAuthorityId"></a>

```go
func IssuerCertificateAuthorityId() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.subject"></a>

```go
func Subject() DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItems">DataOciCertificatesManagementCertificatesCertificateCollectionItems</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.domainComponent">DomainComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.localityName">LocalityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.stateOrProvinceName">StateOrProvinceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.street">Street</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject">DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier"></a>

```go
func DistinguishedNameQualifier() *string
```

- *Type:* *string

---

##### `DomainComponent`<sup>Required</sup> <a name="DomainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.domainComponent"></a>

```go
func DomainComponent() *string
```

- *Type:* *string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.generationQualifier"></a>

```go
func GenerationQualifier() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `LocalityName`<sup>Required</sup> <a name="LocalityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.localityName"></a>

```go
func LocalityName() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.pseudonym"></a>

```go
func Pseudonym() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `StateOrProvinceName`<sup>Required</sup> <a name="StateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.stateOrProvinceName"></a>

```go
func StateOrProvinceName() *string
```

- *Type:* *string

---

##### `Street`<sup>Required</sup> <a name="Street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.street"></a>

```go
func Street() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject">DataOciCertificatesManagementCertificatesCertificateCollectionItemsSubject</a>

---


### DataOciCertificatesManagementCertificatesCertificateCollectionList <a name="DataOciCertificatesManagementCertificatesCertificateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference <a name="DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesCertificateCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollection">DataOciCertificatesManagementCertificatesCertificateCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCertificatesManagementCertificatesCertificateCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionItemsList">DataOciCertificatesManagementCertificatesCertificateCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificatesCertificateCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesCertificateCollection">DataOciCertificatesManagementCertificatesCertificateCollection</a>

---


### DataOciCertificatesManagementCertificatesFilterList <a name="DataOciCertificatesManagementCertificatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificatesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCertificatesManagementCertificatesFilterOutputReference <a name="DataOciCertificatesManagementCertificatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificates"

dataocicertificatesmanagementcertificates.NewDataOciCertificatesManagementCertificatesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificatesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificates.DataOciCertificatesManagementCertificatesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



