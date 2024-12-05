# `dataOciIdentityDomainsOauth2ClientCredentials` Submodule <a name="`dataOciIdentityDomainsOauth2ClientCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauth2ClientCredentials <a name="DataOciIdentityDomainsOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials oci_identity_domains_oauth2client_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials(scope: Construct, id: string, config: DataOciIdentityDomainsOauth2ClientCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig">DataOciIdentityDomainsOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig">DataOciIdentityDomainsOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialCount">resetOauth2ClientCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialFilter">resetOauth2ClientCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauth2ClientCredentialCount` <a name="resetOauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialCount"></a>

```typescript
public resetOauth2ClientCredentialCount(): void
```

##### `resetOauth2ClientCredentialFilter` <a name="resetOauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialFilter"></a>

```typescript
public resetOauth2ClientCredentialFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauth2ClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauth2ClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsOauth2ClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCountInput">oauth2ClientCredentialCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilterInput">oauth2ClientCredentialFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCount">oauth2ClientCredentialCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilter">oauth2ClientCredentialFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `oauth2ClientCredentials`<sup>Required</sup> <a name="oauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentials"></a>

```typescript
public readonly oauth2ClientCredentials: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `oauth2ClientCredentialCountInput`<sup>Optional</sup> <a name="oauth2ClientCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCountInput"></a>

```typescript
public readonly oauth2ClientCredentialCountInput: number;
```

- *Type:* number

---

##### `oauth2ClientCredentialFilterInput`<sup>Optional</sup> <a name="oauth2ClientCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilterInput"></a>

```typescript
public readonly oauth2ClientCredentialFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `oauth2ClientCredentialCount`<sup>Required</sup> <a name="oauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCount"></a>

```typescript
public readonly oauth2ClientCredentialCount: number;
```

- *Type:* number

---

##### `oauth2ClientCredentialFilter`<sup>Required</sup> <a name="oauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilter"></a>

```typescript
public readonly oauth2ClientCredentialFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauth2ClientCredentialsConfig <a name="DataOciIdentityDomainsOauth2ClientCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsConfig: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsOauth2ClientCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attributes DataOciIdentityDomainsOauth2ClientCredentials#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attribute_sets DataOciIdentityDomainsOauth2ClientCredentials#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#authorization DataOciIdentityDomainsOauth2ClientCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#compartment_id DataOciIdentityDomainsOauth2ClientCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#id DataOciIdentityDomainsOauth2ClientCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialCount">oauth2ClientCredentialCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_count DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialFilter">oauth2ClientCredentialFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_filter DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsOauth2ClientCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_by DataOciIdentityDomainsOauth2ClientCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_order DataOciIdentityDomainsOauth2ClientCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#start_index DataOciIdentityDomainsOauth2ClientCredentials#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsOauth2ClientCredentials#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attributes DataOciIdentityDomainsOauth2ClientCredentials#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attribute_sets DataOciIdentityDomainsOauth2ClientCredentials#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#authorization DataOciIdentityDomainsOauth2ClientCredentials#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#compartment_id DataOciIdentityDomainsOauth2ClientCredentials#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#id DataOciIdentityDomainsOauth2ClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth2ClientCredentialCount`<sup>Optional</sup> <a name="oauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialCount"></a>

```typescript
public readonly oauth2ClientCredentialCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_count DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_count}.

---

##### `oauth2ClientCredentialFilter`<sup>Optional</sup> <a name="oauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialFilter"></a>

```typescript
public readonly oauth2ClientCredentialFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_filter DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsOauth2ClientCredentials#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_by DataOciIdentityDomainsOauth2ClientCredentials#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_order DataOciIdentityDomainsOauth2ClientCredentials#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#start_index DataOciIdentityDomainsOauth2ClientCredentials#start_index}.

---

### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser = { ... }
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser: dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.isResetSecret">isResetSecret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.scopes">scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">urnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `isResetSecret`<sup>Required</sup> <a name="isResetSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.isResetSecret"></a>

```typescript
public readonly isResetSecret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.scopes"></a>

```typescript
public readonly scopes: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `urnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionselfChangeUser: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">allowSelfChange</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowSelfChange`<sup>Required</sup> <a name="allowSelfChange" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```typescript
public readonly allowSelfChange: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsOauth2ClientCredentials } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser</a>

---



