# `dataOciCertificatesManagementCertificateAuthorities` Submodule <a name="`dataOciCertificatesManagementCertificateAuthorities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificateAuthorities <a name="DataOciCertificatesManagementCertificateAuthorities" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities oci_certificates_management_certificate_authorities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities(scope: Construct, id: string, config?: DataOciCertificatesManagementCertificateAuthoritiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig">DataOciCertificatesManagementCertificateAuthoritiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig">DataOciCertificatesManagementCertificateAuthoritiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCertificateAuthorityId">resetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetIssuerCertificateAuthorityId">resetIssuerCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCertificatesManagementCertificateAuthoritiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]

---

##### `resetCertificateAuthorityId` <a name="resetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCertificateAuthorityId"></a>

```typescript
public resetCertificateAuthorityId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerCertificateAuthorityId` <a name="resetIssuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetIssuerCertificateAuthorityId"></a>

```typescript
public resetIssuerCertificateAuthorityId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificateAuthorities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCertificatesManagementCertificateAuthorities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCertificatesManagementCertificateAuthorities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificateAuthorities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityCollection">certificateAuthorityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList">DataOciCertificatesManagementCertificateAuthoritiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityIdInput">issuerCertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificateAuthorityCollection`<sup>Required</sup> <a name="certificateAuthorityCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityCollection"></a>

```typescript
public readonly certificateAuthorityCollection: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filter"></a>

```typescript
public readonly filter: DataOciCertificatesManagementCertificateAuthoritiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList">DataOciCertificatesManagementCertificateAuthoritiesFilterList</a>

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityIdInput"></a>

```typescript
public readonly certificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCertificatesManagementCertificateAuthoritiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityIdInput`<sup>Optional</sup> <a name="issuerCertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityIdInput"></a>

```typescript
public readonly issuerCertificateAuthorityIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthorities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject = { ... }
```


### DataOciCertificatesManagementCertificateAuthoritiesConfig <a name="DataOciCertificatesManagementCertificateAuthoritiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesConfig: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityId`<sup>Optional</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#certificate_authority_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#compartment_id DataOciCertificatesManagementCertificateAuthorities#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCertificatesManagementCertificateAuthoritiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#filter DataOciCertificatesManagementCertificateAuthorities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#id DataOciCertificatesManagementCertificateAuthorities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerCertificateAuthorityId`<sup>Optional</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#issuer_certificate_authority_id DataOciCertificatesManagementCertificateAuthorities#issuer_certificate_authority_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#state DataOciCertificatesManagementCertificateAuthorities#state}.

---

### DataOciCertificatesManagementCertificateAuthoritiesFilter <a name="DataOciCertificatesManagementCertificateAuthoritiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

const dataOciCertificatesManagementCertificateAuthoritiesFilter: dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#values DataOciCertificatesManagementCertificateAuthorities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#regex DataOciCertificatesManagementCertificateAuthorities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#name DataOciCertificatesManagementCertificateAuthorities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#values DataOciCertificatesManagementCertificateAuthorities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate_authorities#regex DataOciCertificatesManagementCertificateAuthorities#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.subject"></a>

```typescript
public readonly subject: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.validity"></a>

```typescript
public readonly validity: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfig</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.localityName">localityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigSubject</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration">certificateAuthorityMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration">leafCertificateMaxValidityDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityMaxValidityDuration`<sup>Required</sup> <a name="certificateAuthorityMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.certificateAuthorityMaxValidityDuration"></a>

```typescript
public readonly certificateAuthorityMaxValidityDuration: string;
```

- *Type:* string

---

##### `leafCertificateMaxValidityDuration`<sup>Required</sup> <a name="leafCertificateMaxValidityDuration" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.leafCertificateMaxValidityDuration"></a>

```typescript
public readonly leafCertificateMaxValidityDuration: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRules</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">objectStorageObjectNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```typescript
public readonly objectStorageBucketName: string;
```

- *Type:* string

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```typescript
public readonly objectStorageNamespace: string;
```

- *Type:* string

---

##### `objectStorageObjectNameFormat`<sup>Required</sup> <a name="objectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```typescript
public readonly objectStorageObjectNameFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">customFormattedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">objectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFormattedUrls`<sup>Required</sup> <a name="customFormattedUrls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```typescript
public readonly customFormattedUrls: string[];
```

- *Type:* string[]

---

##### `objectStorageConfig`<sup>Required</sup> <a name="objectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```typescript
public readonly objectStorageConfig: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```typescript
public readonly issuerCaVersionNumber: string;
```

- *Type:* string

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.revocationStatus"></a>

```typescript
public readonly revocationStatus: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.validity"></a>

```typescript
public readonly validity: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersion</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```typescript
public readonly revocationReason: string;
```

- *Type:* string

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```typescript
public readonly timeOfRevocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```typescript
public readonly timeOfValidityNotAfter: string;
```

- *Type:* string

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```typescript
public readonly timeOfValidityNotBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityConfig">certificateAuthorityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityRules">certificateAuthorityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateRevocationListDetails">certificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.configType">configType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.currentVersion">currentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityConfig`<sup>Required</sup> <a name="certificateAuthorityConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityConfig"></a>

```typescript
public readonly certificateAuthorityConfig: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityConfigList</a>

---

##### `certificateAuthorityRules`<sup>Required</sup> <a name="certificateAuthorityRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateAuthorityRules"></a>

```typescript
public readonly certificateAuthorityRules: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateAuthorityRulesList</a>

---

##### `certificateRevocationListDetails`<sup>Required</sup> <a name="certificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.certificateRevocationListDetails"></a>

```typescript
public readonly certificateRevocationListDetails: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCertificateRevocationListDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.currentVersion"></a>

```typescript
public readonly currentVersion: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsCurrentVersionList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.issuerCertificateAuthorityId"></a>

```typescript
public readonly issuerCertificateAuthorityId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.subject"></a>

```typescript
public readonly subject: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItems</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.localityName">localityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.street">street</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.domainComponent"></a>

```typescript
public readonly domainComponent: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.localityName"></a>

```typescript
public readonly localityName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.stateOrProvinceName"></a>

```typescript
public readonly stateOrProvinceName: string;
```

- *Type:* string

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.street"></a>

```typescript
public readonly street: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsSubject</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection">DataOciCertificatesManagementCertificateAuthoritiesCertificateAuthorityCollection</a>

---


### DataOciCertificatesManagementCertificateAuthoritiesFilterList <a name="DataOciCertificatesManagementCertificateAuthoritiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get"></a>

```typescript
public get(index: number): DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCertificatesManagementCertificateAuthoritiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>[]

---


### DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference <a name="DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCertificatesManagementCertificateAuthorities } from 'rhizo-co-terraform-provider-oci'

new dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCertificatesManagementCertificateAuthoritiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificateAuthorities.DataOciCertificatesManagementCertificateAuthoritiesFilter">DataOciCertificatesManagementCertificateAuthoritiesFilter</a>

---



