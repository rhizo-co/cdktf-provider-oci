# `dataOciCertificatesManagementCertificateAuthorityVersion` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorityVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersion <a name="DataOciCertificatesManagementCertificateAuthorityVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version oci_certificates_management_certificate_authority_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersion(scope Construct, id *string, config DataOciCertificatesManagementCertificateAuthorityVersionConfig) DataOciCertificatesManagementCertificateAuthorityVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig">DataOciCertificatesManagementCertificateAuthorityVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig">DataOciCertificatesManagementCertificateAuthorityVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorityVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorityVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCertificatesManagementCertificateAuthorityVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorityVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.issuerCaVersionNumber">IssuerCaVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.revocationStatus">RevocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.stages">Stages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.validity">Validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList">DataOciCertificatesManagementCertificateAuthorityVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumberInput">CertificateAuthorityVersionNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumber">CertificateAuthorityVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IssuerCaVersionNumber`<sup>Required</sup> <a name="IssuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.issuerCaVersionNumber"></a>

```go
func IssuerCaVersionNumber() *string
```

- *Type:* *string

---

##### `RevocationStatus`<sup>Required</sup> <a name="RevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.revocationStatus"></a>

```go
func RevocationStatus() DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.stages"></a>

```go
func Stages() *[]*string
```

- *Type:* *[]*string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.validity"></a>

```go
func Validity() DataOciCertificatesManagementCertificateAuthorityVersionValidityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList">DataOciCertificatesManagementCertificateAuthorityVersionValidityList</a>

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.versionNumber"></a>

```go
func VersionNumber() *string
```

- *Type:* *string

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityIdInput"></a>

```go
func CertificateAuthorityIdInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityVersionNumberInput`<sup>Optional</sup> <a name="CertificateAuthorityVersionNumberInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumberInput"></a>

```go
func CertificateAuthorityVersionNumberInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityId"></a>

```go
func CertificateAuthorityId() *string
```

- *Type:* *string

---

##### `CertificateAuthorityVersionNumber`<sup>Required</sup> <a name="CertificateAuthorityVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.certificateAuthorityVersionNumber"></a>

```go
func CertificateAuthorityVersionNumber() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionConfig <a name="DataOciCertificatesManagementCertificateAuthorityVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

&dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateAuthorityId: *string,
	CertificateAuthorityVersionNumber: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityVersionNumber">CertificateAuthorityVersionNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityId"></a>

```go
CertificateAuthorityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_id DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_id}.

---

##### `CertificateAuthorityVersionNumber`<sup>Required</sup> <a name="CertificateAuthorityVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.certificateAuthorityVersionNumber"></a>

```go
CertificateAuthorityVersionNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#certificate_authority_version_number DataOciCertificatesManagementCertificateAuthorityVersion#certificate_authority_version_number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authority_version#id DataOciCertificatesManagementCertificateAuthorityVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

&dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus {

}
```


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

&dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames {

}
```


### DataOciCertificatesManagementCertificateAuthorityVersionValidity <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

&dataocicertificatesmanagementcertificateauthorityversion.DataOciCertificatesManagementCertificateAuthorityVersionValidity {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.revocationReason">RevocationReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.timeOfRevocation">TimeOfRevocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevocationReason`<sup>Required</sup> <a name="RevocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.revocationReason"></a>

```go
func RevocationReason() *string
```

- *Type:* *string

---

##### `TimeOfRevocation`<sup>Required</sup> <a name="TimeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```go
func TimeOfRevocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthorityVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateAuthorityVersionSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateAuthorityVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersionValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCertificatesManagementCertificateAuthorityVersionValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get"></a>

```go
func Get(index *f64) DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicertificatesmanagementcertificateauthorityversion"

dataocicertificatesmanagementcertificateauthorityversion.NewDataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotAfter">TimeOfValidityNotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotBefore">TimeOfValidityNotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity">DataOciCertificatesManagementCertificateAuthorityVersionValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotAfter`<sup>Required</sup> <a name="TimeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```go
func TimeOfValidityNotAfter() *string
```

- *Type:* *string

---

##### `TimeOfValidityNotBefore`<sup>Required</sup> <a name="TimeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```go
func TimeOfValidityNotBefore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCertificatesManagementCertificateAuthorityVersionValidity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorityVersion.DataOciCertificatesManagementCertificateAuthorityVersionValidity">DataOciCertificatesManagementCertificateAuthorityVersionValidity</a>

---



