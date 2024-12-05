# `dataOciIdentityDomainsOauthClientCertificates` Submodule <a name="`dataOciIdentityDomainsOauthClientCertificates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauthClientCertificates <a name="DataOciIdentityDomainsOauthClientCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates oci_identity_domains_oauth_client_certificates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates(scope: Construct, id: string, config: DataOciIdentityDomainsOauthClientCertificatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig">DataOciIdentityDomainsOauthClientCertificatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig">DataOciIdentityDomainsOauthClientCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateCount">resetOauthClientCertificateCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateFilter">resetOauthClientCertificateFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthClientCertificateCount` <a name="resetOauthClientCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateCount"></a>

```typescript
public resetOauthClientCertificateCount(): void
```

##### `resetOauthClientCertificateFilter` <a name="resetOauthClientCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetOauthClientCertificateFilter"></a>

```typescript
public resetOauthClientCertificateFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauthClientCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauthClientCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsOauthClientCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsOauthClientCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauthClientCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificates">oauthClientCertificates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCountInput">oauthClientCertificateCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilterInput">oauthClientCertificateFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCount">oauthClientCertificateCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilter">oauthClientCertificateFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `oauthClientCertificates`<sup>Required</sup> <a name="oauthClientCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificates"></a>

```typescript
public readonly oauthClientCertificates: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `oauthClientCertificateCountInput`<sup>Optional</sup> <a name="oauthClientCertificateCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCountInput"></a>

```typescript
public readonly oauthClientCertificateCountInput: number;
```

- *Type:* number

---

##### `oauthClientCertificateFilterInput`<sup>Optional</sup> <a name="oauthClientCertificateFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilterInput"></a>

```typescript
public readonly oauthClientCertificateFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `oauthClientCertificateCount`<sup>Required</sup> <a name="oauthClientCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateCount"></a>

```typescript
public readonly oauthClientCertificateCount: number;
```

- *Type:* number

---

##### `oauthClientCertificateFilter`<sup>Required</sup> <a name="oauthClientCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.oauthClientCertificateFilter"></a>

```typescript
public readonly oauthClientCertificateFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauthClientCertificatesConfig <a name="DataOciIdentityDomainsOauthClientCertificatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauthClientCertificatesConfig: dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#idcs_endpoint DataOciIdentityDomainsOauthClientCertificates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#authorization DataOciIdentityDomainsOauthClientCertificates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#compartment_id DataOciIdentityDomainsOauthClientCertificates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#id DataOciIdentityDomainsOauthClientCertificates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateCount">oauthClientCertificateCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_count DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateFilter">oauthClientCertificateFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_filter DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#resource_type_schema_version DataOciIdentityDomainsOauthClientCertificates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_by DataOciIdentityDomainsOauthClientCertificates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_order DataOciIdentityDomainsOauthClientCertificates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#start_index DataOciIdentityDomainsOauthClientCertificates#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#idcs_endpoint DataOciIdentityDomainsOauthClientCertificates#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#authorization DataOciIdentityDomainsOauthClientCertificates#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#compartment_id DataOciIdentityDomainsOauthClientCertificates#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#id DataOciIdentityDomainsOauthClientCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthClientCertificateCount`<sup>Optional</sup> <a name="oauthClientCertificateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateCount"></a>

```typescript
public readonly oauthClientCertificateCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_count DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_count}.

---

##### `oauthClientCertificateFilter`<sup>Optional</sup> <a name="oauthClientCertificateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.oauthClientCertificateFilter"></a>

```typescript
public readonly oauthClientCertificateFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#oauth_client_certificate_filter DataOciIdentityDomainsOauthClientCertificates#oauth_client_certificate_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#resource_type_schema_version DataOciIdentityDomainsOauthClientCertificates#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_by DataOciIdentityDomainsOauthClientCertificates#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#sort_order DataOciIdentityDomainsOauthClientCertificates#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth_client_certificates#start_index DataOciIdentityDomainsOauthClientCertificates#start_index}.

---

### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates: dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates = { ... }
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy: dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy: dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta: dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta = { ... }
```


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags: dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMeta</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certEndDate">certEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certificateAlias">certificateAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certStartDate">certStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreName">keyStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.map">map</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha1Thumbprint">sha1Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha256Thumbprint">sha256Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.x509Base64Certificate">x509Base64Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `certEndDate`<sup>Required</sup> <a name="certEndDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certEndDate"></a>

```typescript
public readonly certEndDate: string;
```

- *Type:* string

---

##### `certificateAlias`<sup>Required</sup> <a name="certificateAlias" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certificateAlias"></a>

```typescript
public readonly certificateAlias: string;
```

- *Type:* string

---

##### `certStartDate`<sup>Required</sup> <a name="certStartDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.certStartDate"></a>

```typescript
public readonly certStartDate: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `keyStoreName`<sup>Required</sup> <a name="keyStoreName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStoreName"></a>

```typescript
public readonly keyStoreName: string;
```

- *Type:* string

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

---

##### `map`<sup>Required</sup> <a name="map" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.map"></a>

```typescript
public readonly map: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `sha1Thumbprint`<sup>Required</sup> <a name="sha1Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha1Thumbprint"></a>

```typescript
public readonly sha1Thumbprint: string;
```

- *Type:* string

---

##### `sha256Thumbprint`<sup>Required</sup> <a name="sha256Thumbprint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.sha256Thumbprint"></a>

```typescript
public readonly sha256Thumbprint: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `x509Base64Certificate`<sup>Required</sup> <a name="x509Base64Certificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.x509Base64Certificate"></a>

```typescript
public readonly x509Base64Certificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificates</a>

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference <a name="DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauthClientCertificates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauthClientCertificates.DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags">DataOciIdentityDomainsOauthClientCertificatesOauthClientCertificatesTags</a>

---



